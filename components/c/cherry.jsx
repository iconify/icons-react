import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udo-y3bir.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udo-y3bir"/>`,
		"fallback": "game-icons:cherry",
	});
}

export default Component;
