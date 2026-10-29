import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ucexqlbld.css';
import '../../css/l/ly5598bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ucexqlbld"/><path class="ly5598bwp wm-a"/></g>`,
		"fallback": "withicons:circle-check-big",
	});
}

export default Component;
