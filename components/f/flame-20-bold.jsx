import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfdja4b-d.css';
import '../../css/n/n8f3jmq8x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfdja4b-d"/><path class="n8f3jmq8x"/>`,
		"fallback": "energy-icons:flame-20-bold",
	});
}

export default Component;
