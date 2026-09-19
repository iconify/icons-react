import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa13ziblr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fa13ziblr"/>`,
		"fallback": "game-icons:fruiting",
	});
}

export default Component;
