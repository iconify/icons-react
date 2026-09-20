import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa3_k1b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa3_k1b_f"/>`,
		"fallback": "mdi:format-text-rotation-none",
	});
}

export default Component;
