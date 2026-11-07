import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym7f000we.css';
import '../../css/g/gv5ke9bho.css';
import '../../css/r/rqzve2bej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ym7f000we"/><path class="gv5ke9bho"/><path class="rqzve2bej"/>`,
		"fallback": "solar:documents-minimalistic-bold",
	});
}

export default Component;
