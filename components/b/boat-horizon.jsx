import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhx1p9phh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhx1p9phh"/>`,
		"fallback": "game-icons:boat-horizon",
	});
}

export default Component;
