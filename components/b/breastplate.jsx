import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8e_b-bze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8e_b-bze"/>`,
		"fallback": "game-icons:breastplate",
	});
}

export default Component;
