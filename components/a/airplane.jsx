import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw0uamblc.css';
import '../../css/c/c3oi41ban.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/w/wrvqot0ph.css';
import '../../css/z/z8ypd6j8d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw0uamblc"/><path class="c3oi41ban"/><g class="kdz4acc8r"><path class="wrvqot0ph"/><path class="z8ypd6j8d"/></g>`,
		"fallback": "openmoji:airplane",
	});
}

export default Component;
