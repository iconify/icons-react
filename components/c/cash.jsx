import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5yuxmz6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5yuxmz6z"/>`,
		"fallback": "game-icons:cash",
	});
}

export default Component;
