import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8q5547tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8q5547tk"/>`,
		"fallback": "mdi:file-edit-outline",
	});
}

export default Component;
