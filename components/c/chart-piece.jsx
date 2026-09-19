import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r1jxbrrvu.css';
import '../../css/v/voai17bcl.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r1jxbrrvu"/><path class="voai17bcl"/></g>`,
		"fallback": "si-glyph:chart-piece",
	});
}

export default Component;
