import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odvwn6b9u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odvwn6b9u"/>`,
		"fallback": "energy-icons:ai-sparkle-20-bold",
	});
}

export default Component;
