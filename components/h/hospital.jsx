import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwqp5qbdv.css';
import '../../css/w/wi3s5ubtt.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwqp5qbdv"/><path class="wi3s5ubtt"/>`,
		"fallback": "lineicons:hospital",
	});
}

export default Component;
