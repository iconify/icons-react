import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soxs6zviv.css';
import '../../css/v/vjp44lm8l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soxs6zviv"/><path class="vjp44lm8l"/>`,
		"fallback": "energy-icons:hammer-20-bold",
	});
}

export default Component;
