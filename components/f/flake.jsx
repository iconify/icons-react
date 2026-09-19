import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t31b8acbn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t31b8acbn"/>`,
		"fallback": "game-icons:flake",
	});
}

export default Component;
