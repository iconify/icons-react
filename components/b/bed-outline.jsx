import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6d0cu9gi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6d0cu9gi"/>`,
		"fallback": "lsicon:bed-outline",
	});
}

export default Component;
