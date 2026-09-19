import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u43mxr2yg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u43mxr2yg"/>`,
		"fallback": "game-icons:habitat-dome",
	});
}

export default Component;
