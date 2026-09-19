import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vf694bb6z.css';
import '../../css/n/nipvudjjc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vf694bb6z"/><path class="nipvudjjc"/></g>`,
		"fallback": "glyphs:dollar-bill-bold",
	});
}

export default Component;
