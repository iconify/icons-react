import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnj45yb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnj45yb4v"/>`,
		"fallback": "boxicons:golf-ball-filled",
	});
}

export default Component;
