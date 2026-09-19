import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1ciw5bfs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1ciw5bfs"/>`,
		"fallback": "game-icons:bully-minion",
	});
}

export default Component;
