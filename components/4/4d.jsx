import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg_w_7bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg_w_7bxt"/>`,
		"fallback": "simple-icons:4d",
	});
}

export default Component;
