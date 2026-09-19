import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hra-0lbmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hra-0lbmi"/>`,
		"fallback": "game-icons:hazard-sign",
	});
}

export default Component;
