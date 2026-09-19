import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7im4pbwg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7im4pbwg"/>`,
		"fallback": "game-icons:bowling-propulsion",
	});
}

export default Component;
