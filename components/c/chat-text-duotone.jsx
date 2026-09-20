import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wlt1rbb1o.css';
import '../../css/e/eaukp4b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wlt1rbb1o"/><path class="eaukp4b_y"/></g>`,
		"fallback": "si:chat-text-duotone",
	});
}

export default Component;
