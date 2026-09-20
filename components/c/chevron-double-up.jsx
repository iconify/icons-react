import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-akw3bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-akw3bix"/>`,
		"fallback": "mdi:chevron-double-up",
	});
}

export default Component;
