import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unp-q8byn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unp-q8byn"/>`,
		"fallback": "thesvg-color:greenhouse",
	});
}

export default Component;
