import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8u-9nalj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8u-9nalj"/>`,
		"fallback": "game-icons:detour",
	});
}

export default Component;
