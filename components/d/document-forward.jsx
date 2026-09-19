import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ur7925mfs.css';
import '../../css/i/ik8r8ackq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ur7925mfs"/><path class="ik8r8ackq"/></g>`,
		"fallback": "si-glyph:document-forward",
	});
}

export default Component;
