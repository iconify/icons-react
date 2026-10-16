import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d16_u1b1y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d16_u1b1y"/>`,
		"fallback": "energy-icons:haze-48-bold",
	});
}

export default Component;
