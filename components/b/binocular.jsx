import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p3pof8b_h.css';
import '../../css/o/onndheh7g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="p3pof8b_h"/><path class="onndheh7g"/></g>`,
		"fallback": "si-glyph:binocular",
	});
}

export default Component;
