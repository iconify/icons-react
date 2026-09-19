import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxvlt1s6e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxvlt1s6e"/>`,
		"fallback": "devicon-plain:frankenphp",
	});
}

export default Component;
