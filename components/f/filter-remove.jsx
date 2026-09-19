import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqjus3b5f.css';
import '../../css/c/ch2vo1b_x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqjus3b5f"/><path class="ch2vo1b_x"/>`,
		"fallback": "carbon:filter-remove",
	});
}

export default Component;
