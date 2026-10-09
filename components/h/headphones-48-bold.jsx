import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrnf0ibmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrnf0ibmm"/>`,
		"fallback": "energy-icons:headphones-48-bold",
	});
}

export default Component;
