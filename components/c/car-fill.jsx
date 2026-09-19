import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qudv71p-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qudv71p-c"/>`,
		"fallback": "eva:car-fill",
	});
}

export default Component;
