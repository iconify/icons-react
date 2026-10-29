import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-e_bv5nu.css';
import '../../css/f/fjsiq_5yd.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/w/wonc8ubbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a-e_bv5nu"/><path class="fjsiq_5yd wm-a"/><path class="y3j3vjb4e"/><path class="wm-a wonc8ubbz"/></g>`,
		"fallback": "withicons:briefcase-medical-duo",
	});
}

export default Component;
