import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao0ucxbbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao0ucxbbd"/>`,
		"fallback": "game-icons:abstract-108",
	});
}

export default Component;
