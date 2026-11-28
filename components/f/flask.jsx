import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g_-wzjb_l.css';
import '../../css/z/zxv-swbgq.css';
import '../../css/z/z8axxibzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="g_-wzjb_l"/><path class="zxv-swbgq"/><path class="z8axxibzf"/></g>`,
		"fallback": "iconaut:flask",
	});
}

export default Component;
