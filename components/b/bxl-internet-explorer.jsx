import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1m9uifqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1m9uifqf"/>`,
		"fallback": "bx:bxl-internet-explorer",
	});
}

export default Component;
