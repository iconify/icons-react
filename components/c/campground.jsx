import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuoqdut9r.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuoqdut9r"/>`,
		"fallback": "fa7-solid:campground",
	});
}

export default Component;
