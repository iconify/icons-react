import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4190l-xv.css';
import '../../css/w/w6o5vcxcm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4190l-xv"/><path class="w6o5vcxcm"/></g>`,
		"fallback": "glyphs:building-3-duo",
	});
}

export default Component;
