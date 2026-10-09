import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8mq92bth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8mq92bth"/>`,
		"fallback": "energy-icons:hot-spring-20-bold",
	});
}

export default Component;
