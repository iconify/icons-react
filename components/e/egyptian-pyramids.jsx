import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3lvhvbof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3lvhvbof"/>`,
		"fallback": "game-icons:egyptian-pyramids",
	});
}

export default Component;
