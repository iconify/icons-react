import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k91r7qbds.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k91r7qbds"/>`,
		"fallback": "energy-icons:caret-up-20",
	});
}

export default Component;
