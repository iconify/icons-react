import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j37pk-bgo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j37pk-bgo"/>`,
		"fallback": "game-icons:chewed-skull",
	});
}

export default Component;
