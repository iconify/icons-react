import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onux0z-vm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onux0z-vm"/>`,
		"fallback": "energy-icons:cloud-20-bold",
	});
}

export default Component;
