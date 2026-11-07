import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4fgxwb1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4fgxwb1e"/>`,
		"fallback": "solar:eye-closed-bold",
	});
}

export default Component;
