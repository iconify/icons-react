import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn-gg53du.css';
import '../../css/h/h_4u6m5ma.css';
import '../../css/f/f2x5c8oex.css';
import '../../css/c/ct5sofbyk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yn-gg53du"/><path clip-rule="evenodd" class="h_4u6m5ma"/><path class="f2x5c8oex"/><path class="ct5sofbyk"/></g>`,
		"fallback": "glyphs-poly:exposure",
	});
}

export default Component;
