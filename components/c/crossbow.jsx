import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pplcewb-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pplcewb-k"/>`,
		"fallback": "game-icons:crossbow",
	});
}

export default Component;
