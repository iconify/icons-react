import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crkp0tb4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crkp0tb4k"/>`,
		"fallback": "roentgen:frame",
	});
}

export default Component;
