import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2zqorujz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2zqorujz"/>`,
		"fallback": "energy-icons:hockey-20",
	});
}

export default Component;
