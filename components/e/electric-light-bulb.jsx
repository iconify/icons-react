import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjjg7sbvj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjjg7sbvj"/>`,
		"fallback": "dinkie-icons:electric-light-bulb",
	});
}

export default Component;
