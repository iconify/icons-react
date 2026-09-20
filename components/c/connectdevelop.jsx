import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eppxe-npy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eppxe-npy"/>`,
		"fallback": "lineicons:connectdevelop",
	});
}

export default Component;
