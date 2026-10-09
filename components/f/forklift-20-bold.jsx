import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv82_wb2m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv82_wb2m"/>`,
		"fallback": "energy-icons:forklift-20-bold",
	});
}

export default Component;
