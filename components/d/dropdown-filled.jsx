import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyhvu77cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyhvu77cm"/>`,
		"fallback": "boxicons:dropdown-filled",
	});
}

export default Component;
