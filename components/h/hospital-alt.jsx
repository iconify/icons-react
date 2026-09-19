import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-h-79ber.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-h-79ber"/>`,
		"fallback": "fa-solid:hospital-alt",
	});
}

export default Component;
