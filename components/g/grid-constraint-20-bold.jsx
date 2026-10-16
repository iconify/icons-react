import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6bewdbru.css';
import '../../css/l/lm0-7bbwm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6bewdbru"/><path class="lm0-7bbwm"/>`,
		"fallback": "energy-icons:grid-constraint-20-bold",
	});
}

export default Component;
