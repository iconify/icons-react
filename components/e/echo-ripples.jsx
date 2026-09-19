import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in4ro2qrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in4ro2qrm"/>`,
		"fallback": "game-icons:echo-ripples",
	});
}

export default Component;
