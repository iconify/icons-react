import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boj-c4biw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boj-c4biw"/>`,
		"fallback": "game-icons:heart-wings",
	});
}

export default Component;
