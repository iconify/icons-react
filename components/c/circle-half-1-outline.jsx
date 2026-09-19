import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-52-gbsj.css';
import '../../css/v/vat0063kh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l-52-gbsj"/><path class="vat0063kh"/></g>`,
		"fallback": "glyphs:circle-half-1-outline",
	});
}

export default Component;
