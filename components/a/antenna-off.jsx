import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr0mjqbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr0mjqbwm"/>`,
		"fallback": "tabler:antenna-off",
	});
}

export default Component;
