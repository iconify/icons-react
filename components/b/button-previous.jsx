import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3r0macjj.css';
import '../../css/j/j66aicyym.css';
import '../../css/k/ks50c2e9c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t3r0macjj"/><path class="j66aicyym"/><path class="ks50c2e9c"/></g>`,
		"fallback": "streamline-color:button-previous",
	});
}

export default Component;
