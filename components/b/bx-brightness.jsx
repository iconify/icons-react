import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb3beig_b.css';
import '../../css/w/w9ouczb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb3beig_b"/><path class="w9ouczb4n"/>`,
		"fallback": "bx:bx-brightness",
	});
}

export default Component;
