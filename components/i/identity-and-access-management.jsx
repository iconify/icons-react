import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g446lwyem.css';
import '../../css/m/mjjfqlb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="g446lwyem"/><path class="mjjfqlb2d"/></g>`,
		"fallback": "gcp:identity-and-access-management",
	});
}

export default Component;
