import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y18hr_cxl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y18hr_cxl"/>`,
		"fallback": "fa7-solid:feed",
	});
}

export default Component;
