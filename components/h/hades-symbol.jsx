import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otcpxlqtr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otcpxlqtr"/>`,
		"fallback": "game-icons:hades-symbol",
	});
}

export default Component;
