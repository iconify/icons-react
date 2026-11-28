import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agykecb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agykecb1n"/>`,
		"fallback": "iconaut:chevron-double-left-solid",
	});
}

export default Component;
