import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0x7j6tzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0x7j6tzf"/>`,
		"fallback": "ri:focus-mode",
	});
}

export default Component;
