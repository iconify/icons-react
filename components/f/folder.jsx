import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd6hn1tbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd6hn1tbd"/>`,
		"fallback": "mi:folder",
	});
}

export default Component;
