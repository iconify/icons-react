import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znca9pbnf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="znca9pbnf"/>`,
		"fallback": "game-icons:electrical-crescent",
	});
}

export default Component;
