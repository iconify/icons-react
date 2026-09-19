import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyc9_1b4z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyc9_1b4z"/>`,
		"fallback": "game-icons:anarchy",
	});
}

export default Component;
