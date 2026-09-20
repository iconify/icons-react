import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phi0w7b3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phi0w7b3l"/>`,
		"fallback": "mynaui:chevron-down-left-waves-solid",
	});
}

export default Component;
