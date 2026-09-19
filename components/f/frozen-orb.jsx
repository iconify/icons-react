import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7q3lxb0c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7q3lxb0c"/>`,
		"fallback": "game-icons:frozen-orb",
	});
}

export default Component;
