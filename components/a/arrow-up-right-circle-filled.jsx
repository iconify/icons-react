import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4jzyo9_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4jzyo9_r"/>`,
		"fallback": "boxicons:arrow-up-right-circle-filled",
	});
}

export default Component;
