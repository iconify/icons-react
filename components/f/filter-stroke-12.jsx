import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc5qq84az.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc5qq84az"/>`,
		"fallback": "garden:filter-stroke-12",
	});
}

export default Component;
