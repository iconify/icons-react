import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc90pxb6r.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc90pxb6r"/>`,
		"fallback": "whh:bluetoothconnected",
	});
}

export default Component;
