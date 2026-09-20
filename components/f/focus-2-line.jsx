import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuqglu7bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuqglu7bv"/>`,
		"fallback": "ri:focus-2-line",
	});
}

export default Component;
