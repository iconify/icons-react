import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hefd2s-6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hefd2s-6j"/>`,
		"fallback": "game-icons:card-queen-diamonds",
	});
}

export default Component;
