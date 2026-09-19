import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t42fs85ft.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t42fs85ft"/>`,
		"fallback": "zmdi:compass",
	});
}

export default Component;
