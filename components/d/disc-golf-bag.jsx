import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b09vim-am.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b09vim-am"/>`,
		"fallback": "game-icons:disc-golf-bag",
	});
}

export default Component;
