import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbhhheven.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbhhheven"/>`,
		"fallback": "bx:bx-video",
	});
}

export default Component;
