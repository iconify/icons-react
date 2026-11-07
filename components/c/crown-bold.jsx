import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmfyb8myx.css';
import '../../css/d/dxwhy-b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmfyb8myx"/><path class="dxwhy-b8i"/>`,
		"fallback": "solar:crown-bold",
	});
}

export default Component;
