import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cmps53bym.css';
import '../../css/y/y044atteb.css';
import '../../css/t/t9f0nvdqy.css';
import '../../css/q/q4hhm4b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cmps53bym"/><path class="y044atteb"/><path class="t9f0nvdqy"/><path class="q4hhm4b9u"/></g>`,
		"fallback": "iconoir:book-lock",
	});
}

export default Component;
