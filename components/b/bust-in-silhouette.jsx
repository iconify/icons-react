import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q77p87buw.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/l/lvhtau_sh.css';
import '../../css/m/mlqtv-6km.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q77p87buw"/><g class="kdz4acc8r"><path class="lvhtau_sh"/><path class="mlqtv-6km"/></g>`,
		"fallback": "openmoji:bust-in-silhouette",
	});
}

export default Component;
