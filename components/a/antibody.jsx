import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vk2c879cp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vk2c879cp"/>`,
		"fallback": "game-icons:antibody",
	});
}

export default Component;
