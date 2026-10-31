import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ee19jwath.css';
import '../../css/w/w6p_0sbns.css';
import '../../css/e/ehmiambcj.css';
import '../../css/i/ihjz0kquw.css';
import '../../css/u/uwyza1bvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ee19jwath wm-shadow"/><path class="w6p_0sbns"/><path class="ehmiambcj"/><path class="ihjz0kquw"/><path class="uwyza1bvi"/></g>`,
		"fallback": "withicons-retro:dna",
	});
}

export default Component;
