import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cctdabcnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cctdabcnh"/>`,
		"fallback": "keyline-icons:arrow-up-fill",
	});
}

export default Component;
