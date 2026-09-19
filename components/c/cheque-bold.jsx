import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr1y6128i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr1y6128i"/>`,
		"fallback": "iconamoon:cheque-bold",
	});
}

export default Component;
