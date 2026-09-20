import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/objhju3au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="objhju3au"/>`,
		"fallback": "thesvg-color:cbc",
	});
}

export default Component;
