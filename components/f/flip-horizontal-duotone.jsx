import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qif7llbjy.css';
import '../../css/i/iw264bc6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qif7llbjy secondary"/><path class="iw264bc6m primary"/></g>`,
		"fallback": "iconaut:flip-horizontal-duotone",
	});
}

export default Component;
