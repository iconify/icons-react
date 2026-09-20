import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztlbgvb3t.css';
import '../../css/o/oze9kib8v.css';
import '../../css/i/i1yucs2ho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ztlbgvb3t"/><path class="oze9kib8v"/><path class="i1yucs2ho"/></g>`,
		"fallback": "nrk:airplay-solid-expressive",
	});
}

export default Component;
