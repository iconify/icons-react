import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kaeay6btt.css';
import '../../css/v/vghdwzbdo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kaeay6btt"/><path class="vghdwzbdo"/></g>`,
		"fallback": "si-glyph:disc-deny",
	});
}

export default Component;
