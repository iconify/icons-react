import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owl3kk8-u.css';

const viewBox = {"width":1664,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owl3kk8-u"/>`,
		"fallback": "fa:font",
	});
}

export default Component;
