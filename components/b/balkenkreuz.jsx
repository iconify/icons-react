import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0kpkxb9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0kpkxb9u"/>`,
		"fallback": "game-icons:balkenkreuz",
	});
}

export default Component;
