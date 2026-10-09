import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lik4byo7x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lik4byo7x"/>`,
		"fallback": "energy-icons:component-20-bold",
	});
}

export default Component;
