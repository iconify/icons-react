import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/ghrgblbvq.css';
import '../../css/h/hd-w3pbjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ghrgblbvq wm-k"/><path class="hd-w3pbjc wm-a"/></g>`,
		"fallback": "withicons-bauhaus:align-bottom",
	});
}

export default Component;
