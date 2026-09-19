import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zb6y2cc4w.css';
import '../../css/i/itpqvhb6v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zb6y2cc4w"/><path class="itpqvhb6v"/></g>`,
		"fallback": "si-glyph:hat",
	});
}

export default Component;
