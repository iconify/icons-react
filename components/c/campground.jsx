import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc8dg7beb.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc8dg7beb"/>`,
		"fallback": "fa-solid:campground",
	});
}

export default Component;
