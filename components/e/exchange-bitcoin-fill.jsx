import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9cfkmbsk.css';
import '../../css/h/h695rk-bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9cfkmbsk"/><path class="h695rk-bi"/>`,
		"fallback": "mingcute:exchange-bitcoin-fill",
	});
}

export default Component;
