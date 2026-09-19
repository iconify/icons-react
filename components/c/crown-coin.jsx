import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmanjnb7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmanjnb7r"/>`,
		"fallback": "game-icons:crown-coin",
	});
}

export default Component;
