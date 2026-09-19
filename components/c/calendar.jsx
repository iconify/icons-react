import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1ot--9xi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1ot--9xi"/>`,
		"fallback": "game-icons:calendar",
	});
}

export default Component;
