import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my_j7lbze.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my_j7lbze"/>`,
		"fallback": "la:battery-full-solid",
	});
}

export default Component;
