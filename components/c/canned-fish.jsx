import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnb4uhzet.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnb4uhzet"/>`,
		"fallback": "game-icons:canned-fish",
	});
}

export default Component;
