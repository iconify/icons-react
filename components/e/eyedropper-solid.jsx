import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxrx3cb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxrx3cb-m"/>`,
		"fallback": "iconaut:eyedropper-solid",
	});
}

export default Component;
