import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6x5pmbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6x5pmbwu"/>`,
		"fallback": "withicons:avatar-monster-fluffy-solid",
	});
}

export default Component;
