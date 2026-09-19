import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv9x1msdp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv9x1msdp"/>`,
		"fallback": "game-icons:desert",
	});
}

export default Component;
