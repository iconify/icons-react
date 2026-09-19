import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykubx6__z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ykubx6__z"/>`,
		"fallback": "heroicons:battery-0-16-solid",
	});
}

export default Component;
