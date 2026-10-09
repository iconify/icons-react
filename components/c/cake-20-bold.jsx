import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua393o__d.css';
import '../../css/p/pi73q5bmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua393o__d"/><path class="pi73q5bmi"/>`,
		"fallback": "energy-icons:cake-20-bold",
	});
}

export default Component;
