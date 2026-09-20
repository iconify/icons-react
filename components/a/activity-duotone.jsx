import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nixqfbcvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nixqfbcvm"/>`,
		"fallback": "si:activity-duotone",
	});
}

export default Component;
