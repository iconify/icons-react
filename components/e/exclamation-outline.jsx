import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1u_28bxj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1u_28bxj"/>`,
		"fallback": "lsicon:exclamation-outline",
	});
}

export default Component;
