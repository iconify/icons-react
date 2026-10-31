import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e9c3edbac.css';
import '../../css/j/jfc6p_8ce.css';
import '../../css/e/efautybtv.css';
import '../../css/z/z2zjn2g3t.css';
import '../../css/a/aa9o_6hgj.css';
import '../../css/w/w6x-pnbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e9c3edbac wm-shadow"/><path class="jfc6p_8ce"/><path class="efautybtv"/><path class="z2zjn2g3t"/><path class="aa9o_6hgj"/><path class="w6x-pnbiv wm-s"/></g>`,
		"fallback": "withicons-retro:bell-plus",
	});
}

export default Component;
