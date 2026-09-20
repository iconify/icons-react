import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0e06xb_t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0e06xb_t"/>`,
		"fallback": "la:hand-point-down-solid",
	});
}

export default Component;
