import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij883nb6j.css';
import '../../css/u/uuwu6z9id.css';
import '../../css/u/u90b6tbsy.css';
import '../../css/x/x09oa7cct.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ij883nb6j"/><path class="uuwu6z9id"/><path class="u90b6tbsy"/><path class="x09oa7cct"/></g>`,
		"fallback": "glyphs:globe-oceania-duo",
	});
}

export default Component;
