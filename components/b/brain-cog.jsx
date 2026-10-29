import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lvwj8zv0y.css';
import '../../css/d/d-c_quigx.css';
import '../../css/e/ekmlpmtjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lvwj8zv0y"/><path class="d-c_quigx wm-a"/><path class="ekmlpmtjg wm-s"/></g>`,
		"fallback": "withicons:brain-cog",
	});
}

export default Component;
