import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shqi23r1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shqi23r1u"/>`,
		"fallback": "game-icons:galea",
	});
}

export default Component;
