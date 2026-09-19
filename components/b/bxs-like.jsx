import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe7wlup1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe7wlup1x"/>`,
		"fallback": "bx:bxs-like",
	});
}

export default Component;
