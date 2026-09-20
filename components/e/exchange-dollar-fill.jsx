import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h695rk-bi.css';
import '../../css/a/aealofbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h695rk-bi"/><path class="aealofbym"/>`,
		"fallback": "mingcute:exchange-dollar-fill",
	});
}

export default Component;
