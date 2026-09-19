import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4oluribo.css';
import '../../css/c/c112rwb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4oluribo"/><path class="c112rwb3o"/>`,
		"fallback": "boxicons:contrast-filled",
	});
}

export default Component;
