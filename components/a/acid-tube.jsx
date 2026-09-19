import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ash7njbnm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ash7njbnm"/>`,
		"fallback": "game-icons:acid-tube",
	});
}

export default Component;
