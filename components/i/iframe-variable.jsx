import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz90e-imq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz90e-imq"/>`,
		"fallback": "mdi:iframe-variable",
	});
}

export default Component;
