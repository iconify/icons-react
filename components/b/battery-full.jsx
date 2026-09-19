import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5ehemmsn.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5ehemmsn"/>`,
		"fallback": "fa6-solid:battery-full",
	});
}

export default Component;
