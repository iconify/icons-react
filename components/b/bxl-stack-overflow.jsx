import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_dm8e3xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_dm8e3xj"/>`,
		"fallback": "bx:bxl-stack-overflow",
	});
}

export default Component;
