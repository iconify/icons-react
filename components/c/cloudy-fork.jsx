import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb3sqvbin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb3sqvbin"/>`,
		"fallback": "game-icons:cloudy-fork",
	});
}

export default Component;
