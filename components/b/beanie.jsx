import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl-2c38wj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl-2c38wj"/>`,
		"fallback": "boxicons:beanie",
	});
}

export default Component;
