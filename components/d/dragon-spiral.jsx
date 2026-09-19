import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqr2403_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqr2403_x"/>`,
		"fallback": "game-icons:dragon-spiral",
	});
}

export default Component;
