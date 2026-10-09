import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9is0ybwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9is0ybwh"/>`,
		"fallback": "energy-icons:cloud-rain-48-bold",
	});
}

export default Component;
