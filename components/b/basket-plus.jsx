import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fecdnac-o.css';
import '../../css/q/qi6q-i06y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fecdnac-o"/><path class="qi6q-i06y"/></g>`,
		"fallback": "si-glyph:basket-plus",
	});
}

export default Component;
