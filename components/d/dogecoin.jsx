import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwxb-w_rr.css';

const viewBox = {"width":16,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwxb-w_rr"/>`,
		"fallback": "formkit:dogecoin",
	});
}

export default Component;
