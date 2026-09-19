import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qzhlbtb8j.css';
import '../../css/c/cpwgzvbdb.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qzhlbtb8j"/><path class="cpwgzvbdb"/></g>`,
		"fallback": "si-glyph:button-remove",
	});
}

export default Component;
