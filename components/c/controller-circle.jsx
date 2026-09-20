import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyf8v3b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyf8v3b2k"/>`,
		"fallback": "mdi:controller-circle",
	});
}

export default Component;
