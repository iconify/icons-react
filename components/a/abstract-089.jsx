import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkiql8hbv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkiql8hbv"/>`,
		"fallback": "game-icons:abstract-089",
	});
}

export default Component;
