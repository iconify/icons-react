import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2ii_ey5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2ii_ey5e"/>`,
		"fallback": "boxicons:arrow-down-left-square-filled",
	});
}

export default Component;
