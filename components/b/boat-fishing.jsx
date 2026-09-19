import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph9rotbtd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph9rotbtd"/>`,
		"fallback": "game-icons:boat-fishing",
	});
}

export default Component;
