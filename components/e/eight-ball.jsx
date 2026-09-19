import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib0_6fb0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib0_6fb0m"/>`,
		"fallback": "game-icons:eight-ball",
	});
}

export default Component;
