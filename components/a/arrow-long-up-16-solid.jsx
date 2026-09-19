import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_hzqnb3e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_hzqnb3e"/>`,
		"fallback": "heroicons:arrow-long-up-16-solid",
	});
}

export default Component;
