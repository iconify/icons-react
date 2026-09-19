import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-ud_9n5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-ud_9n5m"/>`,
		"fallback": "game-icons:battle-axe",
	});
}

export default Component;
