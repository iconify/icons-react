import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1rui8bcn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1rui8bcn"/>`,
		"fallback": "game-icons:birch-trees",
	});
}

export default Component;
