import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe2u2sqvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe2u2sqvh"/>`,
		"fallback": "proicons:calendar",
	});
}

export default Component;
