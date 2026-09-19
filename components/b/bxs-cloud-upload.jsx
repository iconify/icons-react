import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh49xw4sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh49xw4sk"/>`,
		"fallback": "bx:bxs-cloud-upload",
	});
}

export default Component;
