import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5eqpqbfz.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5eqpqbfz"/>`,
		"fallback": "fa6-solid:i-cursor",
	});
}

export default Component;
