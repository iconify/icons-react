import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj2l8ebrt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj2l8ebrt"/>`,
		"fallback": "fa6-regular:circle-right",
	});
}

export default Component;
