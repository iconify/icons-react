import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-x03nb1v.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-x03nb1v"/>`,
		"fallback": "oi:align-right",
	});
}

export default Component;
