import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jr_8_2lyc.css';
import '../../css/z/zq36izn1e.css';
import '../../css/b/bd9iuybie.css';
import '../../css/f/faaiuubbc.css';
import '../../css/r/ryfqb9b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jr_8_2lyc"/><path class="wm-a zq36izn1e"/><path class="bd9iuybie"/><path class="faaiuubbc"/><path class="ryfqb9b2g wm-a"/></g>`,
		"fallback": "withicons:avatar-boy-duo",
	});
}

export default Component;
