import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz-3upcrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jz-3upcrf"/>`,
		"fallback": "solar:eye-closed-bold",
	});
}

export default Component;
