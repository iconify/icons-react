import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi8q3-b_e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi8q3-b_e"/>`,
		"fallback": "la:hotel-solid",
	});
}

export default Component;
