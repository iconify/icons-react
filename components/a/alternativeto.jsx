import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdfsed2ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdfsed2ei"/>`,
		"fallback": "thesvg-color:alternativeto",
	});
}

export default Component;
