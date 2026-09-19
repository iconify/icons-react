import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whl4o-bkm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whl4o-bkm"/>`,
		"fallback": "game-icons:hut",
	});
}

export default Component;
