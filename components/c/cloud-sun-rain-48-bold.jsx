import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqd7lbb8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqd7lbb8y"/>`,
		"fallback": "energy-icons:cloud-sun-rain-48-bold",
	});
}

export default Component;
