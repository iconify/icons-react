import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylq9gqi5e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylq9gqi5e"/>`,
		"fallback": "heroicons:chevron-double-left-20-solid",
	});
}

export default Component;
