import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tysv4ab-o.css';
import '../../css/h/hpr7-vb6x.css';
import '../../css/i/iihy4dpxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tysv4ab-o"/><path class="hpr7-vb6x"/><path class="iihy4dpxe"/></g>`,
		"fallback": "withicons-bauhaus:aperture",
	});
}

export default Component;
