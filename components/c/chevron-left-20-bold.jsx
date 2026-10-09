import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7xl99bwk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7xl99bwk"/>`,
		"fallback": "energy-icons:chevron-left-20-bold",
	});
}

export default Component;
