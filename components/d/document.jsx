import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gqitnqz2w.css';
import '../../css/e/ex-n8x1jx.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gqitnqz2w"/><path class="ex-n8x1jx"/></g>`,
		"fallback": "si-glyph:document",
	});
}

export default Component;
