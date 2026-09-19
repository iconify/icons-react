import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwww3cbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwww3cbyi"/>`,
		"fallback": "bx:bxs-quote-alt-right",
	});
}

export default Component;
