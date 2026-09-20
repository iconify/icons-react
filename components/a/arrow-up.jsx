import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlw-j5ziv.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlw-j5ziv"/>`,
		"fallback": "lineicons:arrow-up",
	});
}

export default Component;
