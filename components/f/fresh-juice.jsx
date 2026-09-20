import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2cef4b8x.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2cef4b8x"/>`,
		"fallback": "lineicons:fresh-juice",
	});
}

export default Component;
