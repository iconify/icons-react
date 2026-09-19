import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l_j2v310e.css';
import '../../css/f/f1dswrbye.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l_j2v310e"/><path class="f1dswrbye"/></g>`,
		"fallback": "si-glyph:congratulation-hat",
	});
}

export default Component;
