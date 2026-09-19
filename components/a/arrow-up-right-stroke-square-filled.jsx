import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv-wf9b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv-wf9b2n"/>`,
		"fallback": "boxicons:arrow-up-right-stroke-square-filled",
	});
}

export default Component;
