import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-d_g7knk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-d_g7knk"/>`,
		"fallback": "game-icons:hobbit-door",
	});
}

export default Component;
