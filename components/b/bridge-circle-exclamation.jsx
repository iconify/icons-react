import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd23swmrl.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yd23swmrl"/>`,
		"fallback": "fa6-solid:bridge-circle-exclamation",
	});
}

export default Component;
