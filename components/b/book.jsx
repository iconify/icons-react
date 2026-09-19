import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s2fz9egoh.css';
import '../../css/g/g3nmz-gyl.css';
import '../../css/x/x50k7-sev.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s2fz9egoh"/><path class="g3nmz-gyl"/><path class="x50k7-sev"/></g>`,
		"fallback": "si-glyph:book",
	});
}

export default Component;
