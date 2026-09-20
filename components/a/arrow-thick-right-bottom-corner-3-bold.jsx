import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibwid0w7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibwid0w7e"/>`,
		"fallback": "streamline-ultimate:arrow-thick-right-bottom-corner-3-bold",
	});
}

export default Component;
