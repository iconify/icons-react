import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plt19qbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plt19qbyi"/>`,
		"fallback": "bx:bed",
	});
}

export default Component;
