import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2kyd2joj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2kyd2joj"/>`,
		"fallback": "energy-icons:chevron-up-20-bold",
	});
}

export default Component;
