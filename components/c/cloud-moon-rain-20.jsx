import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz-fvxbin.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz-fvxbin"/>`,
		"fallback": "energy-icons:cloud-moon-rain-20",
	});
}

export default Component;
