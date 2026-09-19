import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7a-0fcly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7a-0fcly"/>`,
		"fallback": "game-icons:cracked-mask",
	});
}

export default Component;
