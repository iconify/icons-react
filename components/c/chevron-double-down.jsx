import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdout_b_q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fdout_b_q"/>`,
		"fallback": "heroicons-solid:chevron-double-down",
	});
}

export default Component;
