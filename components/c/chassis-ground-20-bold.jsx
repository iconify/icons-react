import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okw4g5bbu.css';
import '../../css/s/sbcow6bho.css';
import '../../css/l/l4c406ble.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okw4g5bbu"/><path class="sbcow6bho"/><path class="l4c406ble"/>`,
		"fallback": "energy-icons:chassis-ground-20-bold",
	});
}

export default Component;
