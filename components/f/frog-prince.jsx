import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gopl69-zs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gopl69-zs"/>`,
		"fallback": "game-icons:frog-prince",
	});
}

export default Component;
