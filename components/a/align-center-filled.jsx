import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4k-5itrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4k-5itrk"/>`,
		"fallback": "boxicons:align-center-filled",
	});
}

export default Component;
