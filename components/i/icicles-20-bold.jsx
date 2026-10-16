import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3tyo9b4u.css';
import '../../css/o/ocquk-bcm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3tyo9b4u"/><path class="ocquk-bcm"/>`,
		"fallback": "energy-icons:icicles-20-bold",
	});
}

export default Component;
