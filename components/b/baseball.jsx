import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z5s_iw4ay.css';
import '../../css/d/dr0xlqb2l.css';
import '../../css/r/r7nyb4b5e.css';
import '../../css/t/t0rxzi1ao.css';
import '../../css/g/gp4e8i8_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z5s_iw4ay"/><path class="dr0xlqb2l"/><path class="r7nyb4b5e"/><path class="t0rxzi1ao"/><path class="gp4e8i8_q"/></g>`,
		"fallback": "iconaut:baseball",
	});
}

export default Component;
