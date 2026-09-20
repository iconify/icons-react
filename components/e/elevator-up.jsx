import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxbldn1_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxbldn1_q"/>`,
		"fallback": "mdi:elevator-up",
	});
}

export default Component;
