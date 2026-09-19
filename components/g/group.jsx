import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fe236rbzs.css';
import '../../css/f/f395o7-qj.css';
import '../../css/b/b6u2wybtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fe236rbzs"/><path class="f395o7-qj"/><path class="b6u2wybtn"/></g>`,
		"fallback": "iconoir:group",
	});
}

export default Component;
