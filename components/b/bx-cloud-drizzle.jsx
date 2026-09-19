import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxmh1e_dh.css';
import '../../css/n/np-r86b3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxmh1e_dh"/><path class="np-r86b3h"/>`,
		"fallback": "bx:bx-cloud-drizzle",
	});
}

export default Component;
