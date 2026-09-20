import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omh6_pbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omh6_pbct"/>`,
		"fallback": "thesvg-color:home-assistant",
	});
}

export default Component;
