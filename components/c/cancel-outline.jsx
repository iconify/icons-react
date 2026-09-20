import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynign8bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynign8bsa"/>`,
		"fallback": "typcn:cancel-outline",
	});
}

export default Component;
