import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwehzwmcr.css';
import '../../css/i/idt7ziwvh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwehzwmcr"/><path class="idt7ziwvh"/>`,
		"fallback": "energy-icons:compliance-20-bold",
	});
}

export default Component;
