import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rloe43qnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rloe43qnx"/>`,
		"fallback": "eva:cube-outline",
	});
}

export default Component;
