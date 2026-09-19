import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we5eze0cw.css';
import '../../css/q/qmnaebbzc.css';
import '../../css/i/icj2onb3b.css';
import '../../css/y/y7u-8kb4y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="we5eze0cw"/><path class="qmnaebbzc"/><path class="icj2onb3b"/><path class="y7u-8kb4y"/></g>`,
		"fallback": "glyphs-poly:farm",
	});
}

export default Component;
