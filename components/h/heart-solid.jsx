import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsm9vtg9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsm9vtg9l"/>`,
		"fallback": "mynaui:heart-solid",
	});
}

export default Component;
