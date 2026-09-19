import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro0w3__dv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro0w3__dv"/>`,
		"fallback": "game-icons:hooded-assassin",
	});
}

export default Component;
