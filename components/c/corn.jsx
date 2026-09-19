import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmcil2bvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmcil2bvm"/>`,
		"fallback": "game-icons:corn",
	});
}

export default Component;
