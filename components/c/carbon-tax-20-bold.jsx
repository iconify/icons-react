import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iua8clh6p.css';
import '../../css/d/d8lollj3h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iua8clh6p"/><path class="d8lollj3h"/>`,
		"fallback": "energy-icons:carbon-tax-20-bold",
	});
}

export default Component;
