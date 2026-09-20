import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3l1hd7pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3l1hd7pz"/>`,
		"fallback": "ri:bowl-fill",
	});
}

export default Component;
