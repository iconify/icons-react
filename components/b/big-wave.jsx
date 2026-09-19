import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uv6_n6e5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uv6_n6e5u"/>`,
		"fallback": "game-icons:big-wave",
	});
}

export default Component;
