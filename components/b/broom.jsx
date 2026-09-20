import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo9-u_9hr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo9-u_9hr"/>`,
		"fallback": "la:broom",
	});
}

export default Component;
