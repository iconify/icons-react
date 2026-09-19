import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xru7odbyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xru7odbyw"/>`,
		"fallback": "fa6-solid:bars-progress",
	});
}

export default Component;
