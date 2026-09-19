import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtshnyb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtshnyb7n"/>`,
		"fallback": "boxicons:arrow-up-right-stroke-circle-filled",
	});
}

export default Component;
