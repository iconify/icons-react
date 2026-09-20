import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2eufffpk.css';
import '../../css/w/w7d7vkb8x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2eufffpk"/><path class="w7d7vkb8x"/></g>`,
		"fallback": "streamline-color:earpods",
	});
}

export default Component;
