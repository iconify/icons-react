import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyhzqe_tg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyhzqe_tg"/>`,
		"fallback": "game-icons:abstract-052",
	});
}

export default Component;
