import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl-1-hbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl-1-hbdl"/>`,
		"fallback": "ri:insert-column-right",
	});
}

export default Component;
