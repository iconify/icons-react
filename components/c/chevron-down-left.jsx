import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c86s1l3_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c86s1l3_r"/>`,
		"fallback": "mynaui:chevron-down-left",
	});
}

export default Component;
