import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er594qb4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er594qb4m"/>`,
		"fallback": "game-icons:battle-mech",
	});
}

export default Component;
