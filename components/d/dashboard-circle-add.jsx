import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z13w5zg4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z13w5zg4c"/>`,
		"fallback": "hugeicons:dashboard-circle-add",
	});
}

export default Component;
