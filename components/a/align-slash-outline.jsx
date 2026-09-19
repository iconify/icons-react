import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5oeg-s5z.css';
import '../../css/e/exsrkup2v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z5oeg-s5z"/><path class="exsrkup2v"/></g>`,
		"fallback": "glyphs:align-slash-outline",
	});
}

export default Component;
