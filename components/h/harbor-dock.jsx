import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbh6wac8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbh6wac8t"/>`,
		"fallback": "game-icons:harbor-dock",
	});
}

export default Component;
