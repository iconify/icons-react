import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnnov91gx.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnnov91gx"/>`,
		"fallback": "osmic:gate-10",
	});
}

export default Component;
