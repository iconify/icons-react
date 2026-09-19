import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_ou2mbsq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_ou2mbsq"/>`,
		"fallback": "game-icons:abstract-092",
	});
}

export default Component;
