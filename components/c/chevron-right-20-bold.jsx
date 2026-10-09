import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db443pbpa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db443pbpa"/>`,
		"fallback": "energy-icons:chevron-right-20-bold",
	});
}

export default Component;
