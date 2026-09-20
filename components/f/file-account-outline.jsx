import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t85jj0bln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t85jj0bln"/>`,
		"fallback": "mdi:file-account-outline",
	});
}

export default Component;
