import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryy95tb9v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryy95tb9v"/>`,
		"fallback": "fa6-solid:forward-fast",
	});
}

export default Component;
