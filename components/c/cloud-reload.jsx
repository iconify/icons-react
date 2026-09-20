import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvny9pook.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvny9pook"/>`,
		"fallback": "subway:cloud-reload",
	});
}

export default Component;
