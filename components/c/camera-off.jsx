import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psnkz2bcb.css';
import '../../css/y/yd1-_qbdi.css';
import '../../css/k/kajlvyf4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="psnkz2bcb"/><path class="wm-a yd1-_qbdi"/><path class="kajlvyf4t wm-s"/></g>`,
		"fallback": "withicons:camera-off",
	});
}

export default Component;
