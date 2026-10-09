import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rarcuc5bb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rarcuc5bb"/>`,
		"fallback": "energy-icons:filter-20-bold",
	});
}

export default Component;
