import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2a4cd6kp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2a4cd6kp"/>`,
		"fallback": "game-icons:card-burn",
	});
}

export default Component;
