import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su1d2xb4r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su1d2xb4r"/>`,
		"fallback": "oi:dollar",
	});
}

export default Component;
