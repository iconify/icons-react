import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czvithbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czvithbsb"/>`,
		"fallback": "mdi:cookie-edit-outline",
	});
}

export default Component;
