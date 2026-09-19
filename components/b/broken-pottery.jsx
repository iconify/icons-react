import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfo0o6wea.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfo0o6wea"/>`,
		"fallback": "game-icons:broken-pottery",
	});
}

export default Component;
