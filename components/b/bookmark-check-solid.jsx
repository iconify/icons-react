import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp_gg1bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp_gg1bht"/>`,
		"fallback": "withicons:bookmark-check-solid",
	});
}

export default Component;
