import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncvg5reyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncvg5reyd"/>`,
		"fallback": "game-icons:abstract-107",
	});
}

export default Component;
