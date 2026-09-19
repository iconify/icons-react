import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e575b_egr.css';
import '../../css/p/pod4q383v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e575b_egr"/><path class="pod4q383v"/></g>`,
		"fallback": "si-glyph:backward-page",
	});
}

export default Component;
