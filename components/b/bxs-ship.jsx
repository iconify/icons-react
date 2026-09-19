import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb-99kp1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb-99kp1u"/>`,
		"fallback": "bx:bxs-ship",
	});
}

export default Component;
