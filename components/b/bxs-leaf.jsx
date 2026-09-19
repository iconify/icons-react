import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt-dj8bjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt-dj8bjn"/>`,
		"fallback": "bx:bxs-leaf",
	});
}

export default Component;
