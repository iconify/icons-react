import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypl7m5fud.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypl7m5fud"/>`,
		"fallback": "fa6-solid:arrow-down-wide-short",
	});
}

export default Component;
