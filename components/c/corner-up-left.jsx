import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y-vo2hw9j.css';
import '../../css/v/v5b61-ocj.css';
import '../../css/d/d0nv4lbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="y-vo2hw9j"/><path class="v5b61-ocj"/><path class="d0nv4lbae"/></g>`,
		"fallback": "withicons-bauhaus:corner-up-left",
	});
}

export default Component;
