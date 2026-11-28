import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-fc0ocqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary x-fc0ocqf"/>`,
		"fallback": "iconaut:chevron-up-duotone",
	});
}

export default Component;
