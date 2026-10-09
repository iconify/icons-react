import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu9rvubvf.css';
import '../../css/w/w-l4ddc4l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu9rvubvf"/><path class="w-l4ddc4l"/>`,
		"fallback": "energy-icons:battery-module-48-bold",
	});
}

export default Component;
