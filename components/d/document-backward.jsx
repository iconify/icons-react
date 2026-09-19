import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wgh88l-um.css';
import '../../css/i/ik8r8ackq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wgh88l-um"/><path class="ik8r8ackq"/></g>`,
		"fallback": "si-glyph:document-backward",
	});
}

export default Component;
