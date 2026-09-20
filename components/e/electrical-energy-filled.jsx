import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgm1b6z5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgm1b6z5u"/>`,
		"fallback": "ix:electrical-energy-filled",
	});
}

export default Component;
