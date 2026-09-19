import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4q0w21ni.css';

const viewBox = {"width":480,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4q0w21ni"/>`,
		"fallback": "ps:crown",
	});
}

export default Component;
