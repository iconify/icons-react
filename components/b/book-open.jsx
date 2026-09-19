import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnawge0py.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnawge0py"/>`,
		"fallback": "feather:book-open",
	});
}

export default Component;
