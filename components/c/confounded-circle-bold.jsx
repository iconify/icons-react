import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omknc6b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="omknc6b_r"/>`,
		"fallback": "solar:confounded-circle-bold",
	});
}

export default Component;
