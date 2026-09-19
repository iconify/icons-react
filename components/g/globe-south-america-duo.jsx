import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij883nb6j.css';
import '../../css/t/tid97b_tp.css';
import '../../css/u/u90b6tbsy.css';
import '../../css/i/iajoambxv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ij883nb6j"/><path class="tid97b_tp"/><path class="u90b6tbsy"/><path class="iajoambxv"/></g>`,
		"fallback": "glyphs:globe-south-america-duo",
	});
}

export default Component;
