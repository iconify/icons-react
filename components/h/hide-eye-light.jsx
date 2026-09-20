import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/kdtzbybhn.css';
import '../../css/w/w5-c7ob8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="kdtzbybhn"/><path class="w5-c7ob8f"/></g>`,
		"fallback": "lets-icons:hide-eye-light",
	});
}

export default Component;
