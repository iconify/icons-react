import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbkxeac3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbkxeac3w"/>`,
		"fallback": "mdi:alphabet-b-circle-outline",
	});
}

export default Component;
