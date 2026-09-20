import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lges67bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lges67bsk"/>`,
		"fallback": "mdi:camera-lock-open-outline",
	});
}

export default Component;
