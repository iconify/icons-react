import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-5ihx0_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-5ihx0_f"/>`,
		"fallback": "game-icons:expense",
	});
}

export default Component;
