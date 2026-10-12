import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyu6-1wma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyu6-1wma"/>`,
		"fallback": "andrsrxn:chevron-down",
	});
}

export default Component;
