import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl8spzfjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl8spzfjl"/>`,
		"fallback": "boxicons:desk-filled",
	});
}

export default Component;
