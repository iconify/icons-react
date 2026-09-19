import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntgnm7b_i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntgnm7b_i"/>`,
		"fallback": "f7:crop-rotate",
	});
}

export default Component;
