import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krk_5tb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krk_5tb9h"/>`,
		"fallback": "bx:bxl-messenger",
	});
}

export default Component;
