import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me5flgb-v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me5flgb-v"/>`,
		"fallback": "game-icons:human-pyramid",
	});
}

export default Component;
