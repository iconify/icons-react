import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny6k_kb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny6k_kb5r"/>`,
		"fallback": "uil:angle-double-right",
	});
}

export default Component;
