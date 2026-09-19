import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia4prxbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia4prxbzi"/>`,
		"fallback": "boxicons:acorn-filled",
	});
}

export default Component;
