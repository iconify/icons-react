import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-620qbwt.css';
import '../../css/y/yt-k0nbfs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-620qbwt"/><path class="yt-k0nbfs"/></g>`,
		"fallback": "fluent-emoji-flat:cloud",
	});
}

export default Component;
