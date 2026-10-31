import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s3--xbcsk.css';
import '../../css/q/qt6jdabzw.css';
import '../../css/c/cj0llibnk.css';
import '../../css/u/uiy7-j5fo.css';
import '../../css/v/vkxu1dbek.css';
import '../../css/p/p4z3j6bmt.css';
import '../../css/d/d-eb5h65l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s3--xbcsk wm-k"/><path class="qt6jdabzw wm-deco"/><path class="cj0llibnk wm-k"/><path class="uiy7-j5fo wm-shadow"/><path class="vkxu1dbek wm-shine"/><path class="p4z3j6bmt wm-shine"/><path class="d-eb5h65l wm-shine"/></g>`,
		"fallback": "withicons-valentine:folder",
	});
}

export default Component;
