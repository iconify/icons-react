import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtj37ub3j.css';
import '../../css/y/yvc3dk4hi.css';
import '../../css/g/g9srdqbje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vtj37ub3j"/><path class="yvc3dk4hi"/><path class="g9srdqbje"/>`,
		"fallback": "solar:car-battery-bold",
	});
}

export default Component;
