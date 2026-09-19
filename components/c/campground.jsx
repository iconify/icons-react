import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py7p6nbby.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py7p6nbby"/>`,
		"fallback": "fa6-solid:campground",
	});
}

export default Component;
