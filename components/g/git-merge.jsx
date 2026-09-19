import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlb_9o8_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlb_9o8_i"/>`,
		"fallback": "bx:git-merge",
	});
}

export default Component;
