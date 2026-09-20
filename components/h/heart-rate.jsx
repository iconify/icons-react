import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1_y4b3pi.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1_y4b3pi"/>`,
		"fallback": "system-uicons:heart-rate",
	});
}

export default Component;
