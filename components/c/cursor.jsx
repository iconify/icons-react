import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cjivcabhf.css';
import '../../css/i/ivj0dyb1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cjivcabhf"/><path class="ivj0dyb1p wm-a"/></g>`,
		"fallback": "withicons:cursor",
	});
}

export default Component;
