import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn-robb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn-robb-x"/>`,
		"fallback": "guidance:entry",
	});
}

export default Component;
