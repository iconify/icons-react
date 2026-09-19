import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw9ye5pbm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw9ye5pbm"/>`,
		"fallback": "game-icons:bowling-pin",
	});
}

export default Component;
