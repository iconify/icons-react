import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x52nqvb3v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x52nqvb3v"/>`,
		"fallback": "game-icons:fertilizer-bag",
	});
}

export default Component;
