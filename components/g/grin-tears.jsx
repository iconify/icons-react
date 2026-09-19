import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ptl0otbdr.css';
import '../../css/d/d2e0hniif.css';
import '../../css/o/on4mi1mmc.css';
import '../../css/s/smvgl5sak.css';
import '../../css/l/lr-9pmbpr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ptl0otbdr"/><path clip-rule="evenodd" class="d2e0hniif"/><path class="on4mi1mmc"/><path class="smvgl5sak"/><path class="lr-9pmbpr"/></g>`,
		"fallback": "glyphs-poly:grin-tears",
	});
}

export default Component;
