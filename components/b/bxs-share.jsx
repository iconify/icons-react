import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl0gd1q_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl0gd1q_p"/>`,
		"fallback": "bx:bxs-share",
	});
}

export default Component;
