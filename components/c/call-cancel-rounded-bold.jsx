import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-r_0lb5z.css';
import '../../css/c/cfzav0mxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-r_0lb5z"/><path class="cfzav0mxj"/>`,
		"fallback": "solar:call-cancel-rounded-bold",
	});
}

export default Component;
