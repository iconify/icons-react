import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pdwey0b5q.css';
import '../../css/n/n79j0rbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pdwey0b5q"/><path class="n79j0rbbq"/></g>`,
		"fallback": "withicons:close-sketch",
	});
}

export default Component;
