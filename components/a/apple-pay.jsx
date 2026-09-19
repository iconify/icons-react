import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8ass-29u.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8ass-29u"/>`,
		"fallback": "fontisto:apple-pay",
	});
}

export default Component;
