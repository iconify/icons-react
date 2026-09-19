import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd_488hbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fd_488hbx"/>`,
		"fallback": "heroicons:bell-solid",
	});
}

export default Component;
