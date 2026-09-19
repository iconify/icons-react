import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4fzceb1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4fzceb1c"/>`,
		"fallback": "game-icons:evil-eyes",
	});
}

export default Component;
