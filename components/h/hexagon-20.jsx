import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h82f8zb2b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h82f8zb2b"/>`,
		"fallback": "energy-icons:hexagon-20",
	});
}

export default Component;
