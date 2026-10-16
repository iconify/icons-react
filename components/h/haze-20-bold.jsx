import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqoz6vy8q.css';
import '../../css/p/pi9uz4b0v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqoz6vy8q"/><path class="pi9uz4b0v"/>`,
		"fallback": "energy-icons:haze-20-bold",
	});
}

export default Component;
