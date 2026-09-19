import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjvg-rh4l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjvg-rh4l"/>`,
		"fallback": "game-icons:inner-self",
	});
}

export default Component;
