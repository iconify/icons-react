import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9v5rqj_x.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9v5rqj_x"/>`,
		"fallback": "fa6-solid:hands-bound",
	});
}

export default Component;
