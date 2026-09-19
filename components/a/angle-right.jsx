import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex-j_h13o.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex-j_h13o"/>`,
		"fallback": "fa-solid:angle-right",
	});
}

export default Component;
