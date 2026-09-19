import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4q4xpyc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov4q4xpyc"/>`,
		"fallback": "game-icons:card-3-diamonds",
	});
}

export default Component;
