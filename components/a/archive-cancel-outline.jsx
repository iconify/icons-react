import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhaw4ccch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhaw4ccch"/>`,
		"fallback": "mdi:archive-cancel-outline",
	});
}

export default Component;
