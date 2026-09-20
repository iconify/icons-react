import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnkzy6zqq.css';
import '../../css/h/h695rk-bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnkzy6zqq"/><path class="h695rk-bi"/>`,
		"fallback": "mingcute:exchange-euro-fill",
	});
}

export default Component;
