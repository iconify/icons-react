import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3_r0mbjk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3_r0mbjk"/>`,
		"fallback": "game-icons:flower-twirl",
	});
}

export default Component;
