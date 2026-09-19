import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv_r1s6dh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv_r1s6dh"/>`,
		"fallback": "game-icons:car-door",
	});
}

export default Component;
