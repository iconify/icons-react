import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqnb87bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqnb87bdm"/>`,
		"fallback": "andrsrxn:arrows-up",
	});
}

export default Component;
