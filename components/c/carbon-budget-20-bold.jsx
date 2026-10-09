import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_ezx1bzs.css';
import '../../css/f/f46-hd4vn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_ezx1bzs"/><path class="f46-hd4vn"/>`,
		"fallback": "energy-icons:carbon-budget-20-bold",
	});
}

export default Component;
