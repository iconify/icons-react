import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxmkebcbg.css';
import '../../css/w/wfs41yb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxmkebcbg"/><path class="wfs41yb4d"/>`,
		"fallback": "bx:bx-bookmark-minus",
	});
}

export default Component;
