import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1iilzmhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1iilzmhe"/>`,
		"fallback": "fa6-solid:crosshairs",
	});
}

export default Component;
