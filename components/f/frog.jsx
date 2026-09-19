import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp08kkbed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp08kkbed"/>`,
		"fallback": "game-icons:frog",
	});
}

export default Component;
