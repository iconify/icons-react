import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a3ty376mn.css';
import '../../css/l/lqkm_zb1c.css';
import '../../css/g/goa5w6bcu.css';
import '../../css/j/jeoc3-x0c.css';
import '../../css/g/goxeseb-e.css';
import '../../css/d/d6_3e1c9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a3ty376mn wm-shadow"/><path class="lqkm_zb1c"/><path class="goa5w6bcu"/><path class="jeoc3-x0c"/><path class="goxeseb-e"/><path class="d6_3e1c9q"/></g>`,
		"fallback": "withicons-retro:chocolate-box",
	});
}

export default Component;
