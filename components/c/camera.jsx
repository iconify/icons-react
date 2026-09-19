import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j-kfwwbil.css';
import '../../css/v/vd-k9xnac.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(.995 2.98)" class="n1lsf0bnc"><circle class="j-kfwwbil"/><path class="vd-k9xnac"/></g>`,
		"fallback": "si-glyph:camera",
	});
}

export default Component;
