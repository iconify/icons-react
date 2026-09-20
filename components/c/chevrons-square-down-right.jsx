import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_n8-4b8m.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_n8-4b8m"/>`,
		"fallback": "jam:chevrons-square-down-right",
	});
}

export default Component;
