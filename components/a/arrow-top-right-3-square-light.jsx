import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-rfbdcaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-rfbdcaq"/>`,
		"fallback": "iconamoon:arrow-top-right-3-square-light",
	});
}

export default Component;
