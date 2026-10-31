import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fqmmm0bpd.css';
import '../../css/y/yirfaiz0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fqmmm0bpd"/><path class="yirfaiz0s"/></g>`,
		"fallback": "withicons-retro:holly",
	});
}

export default Component;
