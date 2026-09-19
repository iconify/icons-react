import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quv36cb6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quv36cb6p"/>`,
		"fallback": "game-icons:bison",
	});
}

export default Component;
