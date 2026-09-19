import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjasth-5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjasth-5j"/>`,
		"fallback": "eva:globe-3-fill",
	});
}

export default Component;
