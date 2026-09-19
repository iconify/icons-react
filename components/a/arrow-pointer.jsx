import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfd4fdc5a.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfd4fdc5a"/>`,
		"fallback": "fa6-solid:arrow-pointer",
	});
}

export default Component;
