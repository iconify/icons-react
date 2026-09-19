import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6u6pfgnd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6u6pfgnd"/>`,
		"fallback": "game-icons:black-belt",
	});
}

export default Component;
