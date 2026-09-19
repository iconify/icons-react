import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miz1qxb4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miz1qxb4v"/>`,
		"fallback": "game-icons:capitol",
	});
}

export default Component;
