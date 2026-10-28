import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix0kzerhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix0kzerhu"/>`,
		"fallback": "andrsrxn:currency-azn",
	});
}

export default Component;
