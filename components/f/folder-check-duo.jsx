import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l3_osuk8y.css';
import '../../css/n/natt5rb_j.css';
import '../../css/l/l484bmbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l3_osuk8y"/><path class="natt5rb_j wm-a"/><path class="l484bmbsu"/></g>`,
		"fallback": "withicons:folder-check-duo",
	});
}

export default Component;
