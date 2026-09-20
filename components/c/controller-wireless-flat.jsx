import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wddcw00vy.css';
import '../../css/x/x_zlyssnp.css';
import '../../css/t/t1ifqebhl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wddcw00vy"/><path class="x_zlyssnp"/><path class="t1ifqebhl"/></g>`,
		"fallback": "streamline-color:controller-wireless-flat",
	});
}

export default Component;
