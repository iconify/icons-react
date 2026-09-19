import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dsamxhbid.css';
import '../../css/q/qbkd74awu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="dsamxhbid"/><path class="qbkd74awu"/></g>`,
		"fallback": "hugeicons:hut",
	});
}

export default Component;
