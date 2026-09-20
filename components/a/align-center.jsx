import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1a6c0ghi.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1a6c0ghi"/>`,
		"fallback": "oi:align-center",
	});
}

export default Component;
