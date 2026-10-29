import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/klfzlu_vz.css';
import '../../css/u/ujrkc1bmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="klfzlu_vz"/><path class="ujrkc1bmm wm-a"/></g>`,
		"fallback": "withicons:avatar-monster-horns",
	});
}

export default Component;
