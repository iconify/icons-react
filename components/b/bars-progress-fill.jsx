import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4b3j5znj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4b3j5znj"/>`,
		"fallback": "keyline-icons:bars-progress-fill",
	});
}

export default Component;
