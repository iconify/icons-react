import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn2jg20aj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn2jg20aj"/>`,
		"fallback": "fa-solid:battery-three-quarters",
	});
}

export default Component;
