import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf6-8eb6z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf6-8eb6z"/>`,
		"fallback": "game-icons:hearts",
	});
}

export default Component;
