import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifh5o_b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifh5o_b4z"/>`,
		"fallback": "mdi:human-line",
	});
}

export default Component;
