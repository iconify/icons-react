import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pzc9if4bz.css';
import '../../css/e/et2o4xb2m.css';
import '../../css/b/b33e_p7pc.css';
import '../../css/y/ysnzkuc4a.css';
import '../../css/i/izf0nz-di.css';
import '../../css/b/bkrhobcnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pzc9if4bz wm-k"/><path class="et2o4xb2m wm-a"/><path class="b33e_p7pc wm-k"/><path class="wm-s ysnzkuc4a"/><path class="izf0nz-di"/><path class="bkrhobcnl"/></g>`,
		"fallback": "withicons-bauhaus:heart-gift",
	});
}

export default Component;
