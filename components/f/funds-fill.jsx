import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cto-b0f_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cto-b0f_o"/>`,
		"fallback": "ri:funds-fill",
	});
}

export default Component;
