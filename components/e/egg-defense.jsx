import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgw8ko-wm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgw8ko-wm"/>`,
		"fallback": "game-icons:egg-defense",
	});
}

export default Component;
