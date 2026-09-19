import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y--m3f9qp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y--m3f9qp"/>`,
		"fallback": "game-icons:boba",
	});
}

export default Component;
