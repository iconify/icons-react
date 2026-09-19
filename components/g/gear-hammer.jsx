import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dgd8_wbyj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dgd8_wbyj"/>`,
		"fallback": "game-icons:gear-hammer",
	});
}

export default Component;
