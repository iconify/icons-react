import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihq972-jo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihq972-jo"/>`,
		"fallback": "fa7-solid:globe",
	});
}

export default Component;
