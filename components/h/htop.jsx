import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olr5yl-eh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olr5yl-eh"/>`,
		"fallback": "thesvg-color:htop",
	});
}

export default Component;
