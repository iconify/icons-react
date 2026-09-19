import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4-y6jbck.css';
import '../../css/h/hu2vwjy5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4-y6jbck"/><path class="hu2vwjy5d"/>`,
		"fallback": "bx:bxs-microphone-off",
	});
}

export default Component;
