import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy8g0pbwq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy8g0pbwq"/>`,
		"fallback": "game-icons:galley",
	});
}

export default Component;
