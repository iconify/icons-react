import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2m4sxbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2m4sxbuf"/>`,
		"fallback": "mdi:comma-box-outline",
	});
}

export default Component;
