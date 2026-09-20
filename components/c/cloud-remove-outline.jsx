import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5u0atb3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5u0atb3m"/>`,
		"fallback": "mdi:cloud-remove-outline",
	});
}

export default Component;
