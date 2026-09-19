import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kei78h1bh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kei78h1bh"/>`,
		"fallback": "game-icons:baby-face",
	});
}

export default Component;
