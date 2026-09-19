import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsws4ub3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsws4ub3u"/>`,
		"fallback": "game-icons:flame-spin",
	});
}

export default Component;
