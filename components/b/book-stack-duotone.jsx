import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc3st3bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc3st3bkj primary"/>`,
		"fallback": "iconaut:book-stack-duotone",
	});
}

export default Component;
