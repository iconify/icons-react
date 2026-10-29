import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/h/hayg57blh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="y3j3vjb4e"/><path class="hayg57blh wm-a"/></g>`,
		"fallback": "withicons:briefcase-medical",
	});
}

export default Component;
