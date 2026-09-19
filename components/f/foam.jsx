import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0d3nx-bs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0d3nx-bs"/>`,
		"fallback": "game-icons:foam",
	});
}

export default Component;
