import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t9x40q68b.css';
import '../../css/g/gqdq6kbsz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t9x40q68b"/><path class="gqdq6kbsz"/></g>`,
		"fallback": "glyphs:icons-bold",
	});
}

export default Component;
