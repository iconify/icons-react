import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jotj3v2bz.css';
import '../../css/y/y_-ddrbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jotj3v2bz"/><path class="y_-ddrbdq"/>`,
		"fallback": "bx:bxl-mailchimp",
	});
}

export default Component;
