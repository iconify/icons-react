import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3-ph0b8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3-ph0b8c"/>`,
		"fallback": "game-icons:frozen-body",
	});
}

export default Component;
