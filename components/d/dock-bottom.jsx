import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut3-glbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut3-glbdq"/>`,
		"fallback": "boxicons:dock-bottom",
	});
}

export default Component;
