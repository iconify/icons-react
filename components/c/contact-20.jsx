import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx89adb5k.css';
import '../../css/p/p-13vkqjz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx89adb5k"/><path class="p-13vkqjz"/>`,
		"fallback": "energy-icons:contact-20",
	});
}

export default Component;
