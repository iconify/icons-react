import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1q1bljxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1q1bljxw"/>`,
		"fallback": "boxicons:dock-bottom-right-alt-filled",
	});
}

export default Component;
