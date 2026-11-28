import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bx3r1ib1x.css';
import '../../css/z/zt6c4i-gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bx3r1ib1x"/><path class="zt6c4i-gu"/></g>`,
		"fallback": "iconaut:brackets",
	});
}

export default Component;
