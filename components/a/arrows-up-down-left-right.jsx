import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8ba5lbhb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8ba5lbhb"/>`,
		"fallback": "fa6-solid:arrows-up-down-left-right",
	});
}

export default Component;
