import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxx6fwb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxx6fwb7n"/>`,
		"fallback": "mage:arrow-down-left-circle-fill",
	});
}

export default Component;
