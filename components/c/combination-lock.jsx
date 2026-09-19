import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikuyx85cg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikuyx85cg"/>`,
		"fallback": "game-icons:combination-lock",
	});
}

export default Component;
