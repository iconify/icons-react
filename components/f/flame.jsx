import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/senf79cxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="senf79cxn"/>`,
		"fallback": "game-icons:flame",
	});
}

export default Component;
