import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlv--ihec.css';
import '../../css/n/nm-cakbfp.css';
import '../../css/w/wmhvhjlfj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rlv--ihec"/><path class="nm-cakbfp"/><path class="wmhvhjlfj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:biohazard",
	});
}

export default Component;
