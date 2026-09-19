import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da-l02b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da-l02b_h"/>`,
		"fallback": "hugeicons:flip-vertical-01",
	});
}

export default Component;
