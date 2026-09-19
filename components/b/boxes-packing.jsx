import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybmao4abp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybmao4abp"/>`,
		"fallback": "fa7-solid:boxes-packing",
	});
}

export default Component;
