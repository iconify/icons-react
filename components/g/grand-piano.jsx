import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc5nh5bzm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc5nh5bzm"/>`,
		"fallback": "game-icons:grand-piano",
	});
}

export default Component;
