import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vha8znr2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vha8znr2r"/>`,
		"fallback": "game-icons:ants",
	});
}

export default Component;
