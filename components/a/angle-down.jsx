import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0kbg_pxp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0kbg_pxp"/>`,
		"fallback": "fa6-solid:angle-down",
	});
}

export default Component;
