import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyv23_bbf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyv23_bbf"/>`,
		"fallback": "game-icons:card-5-diamonds",
	});
}

export default Component;
