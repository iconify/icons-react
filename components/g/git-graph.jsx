import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fmt8t-bkh.css';
import '../../css/h/h-emp1b9q.css';
import '../../css/g/gby_x_22c.css';
import '../../css/s/s8wfk6fit.css';
import '../../css/k/kkr0hmi_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fmt8t-bkh wm-shadow"/><path class="h-emp1b9q"/><path class="gby_x_22c"/><path class="s8wfk6fit"/><path class="kkr0hmi_p"/></g>`,
		"fallback": "withicons-retro:git-graph",
	});
}

export default Component;
