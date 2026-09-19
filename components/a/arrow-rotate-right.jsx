import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz208utkj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz208utkj"/>`,
		"fallback": "fa6-solid:arrow-rotate-right",
	});
}

export default Component;
