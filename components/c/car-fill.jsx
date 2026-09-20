import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpu-awb2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpu-awb2r"/>`,
		"fallback": "ri:car-fill",
	});
}

export default Component;
