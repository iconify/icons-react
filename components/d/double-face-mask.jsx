import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auj86-bvb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auj86-bvb"/>`,
		"fallback": "game-icons:double-face-mask",
	});
}

export default Component;
