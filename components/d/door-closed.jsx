import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/pf8acubjp.css';
import '../../css/r/rwdsblbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="pf8acubjp"/><path class="rwdsblbcu"/></g>`,
		"fallback": "withicons-bauhaus:door-closed",
	});
}

export default Component;
