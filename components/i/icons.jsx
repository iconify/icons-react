import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om4a-sm7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om4a-sm7k"/>`,
		"fallback": "fa-solid:icons",
	});
}

export default Component;
