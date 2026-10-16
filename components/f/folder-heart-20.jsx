import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3me-4caq.css';
import '../../css/o/oixzy0brp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3me-4caq"/><path class="oixzy0brp"/>`,
		"fallback": "energy-icons:folder-heart-20",
	});
}

export default Component;
