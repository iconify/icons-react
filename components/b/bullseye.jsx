import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo5bo8b-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo5bo8b-b"/>`,
		"fallback": "game-icons:bullseye",
	});
}

export default Component;
