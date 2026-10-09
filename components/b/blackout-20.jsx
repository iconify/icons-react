import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg31mwb1y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg31mwb1y"/>`,
		"fallback": "energy-icons:blackout-20",
	});
}

export default Component;
