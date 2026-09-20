import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow8rh0bwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ow8rh0bwz"/>`,
		"fallback": "solar:info-circle-bold",
	});
}

export default Component;
