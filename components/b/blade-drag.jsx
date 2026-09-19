import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i958ez5yu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i958ez5yu"/>`,
		"fallback": "game-icons:blade-drag",
	});
}

export default Component;
