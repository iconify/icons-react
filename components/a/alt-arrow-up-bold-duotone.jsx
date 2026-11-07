import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anlkm7xov.css';
import '../../css/f/fbtcj0tzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anlkm7xov"/><path class="fbtcj0tzl"/>`,
		"fallback": "solar:alt-arrow-up-bold-duotone",
	});
}

export default Component;
