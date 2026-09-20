import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx0j4pwwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx0j4pwwu"/>`,
		"fallback": "tabler:bubble-minus",
	});
}

export default Component;
