import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh1n3196e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh1n3196e"/>`,
		"fallback": "thesvg:barclays",
	});
}

export default Component;
