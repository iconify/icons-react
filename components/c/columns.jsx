import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_y1t0b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_y1t0b8b"/>`,
		"fallback": "uil:columns",
	});
}

export default Component;
