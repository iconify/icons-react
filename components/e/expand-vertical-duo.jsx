import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ubq9ihbin.css';
import '../../css/q/qfu7ueb2w.css';
import '../../css/w/w8dto046u.css';
import '../../css/m/m1lsa9pun.css';
import '../../css/s/sa3gq0d8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ubq9ihbin"/><path class="qfu7ueb2w"/><path class="w8dto046u"/><path class="m1lsa9pun"/><path class="sa3gq0d8x"/></g>`,
		"fallback": "iconaut:expand-vertical-duo",
	});
}

export default Component;
