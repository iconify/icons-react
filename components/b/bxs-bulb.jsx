import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t35_r-06s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t35_r-06s"/>`,
		"fallback": "bx:bxs-bulb",
	});
}

export default Component;
