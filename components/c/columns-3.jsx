import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gvys7u6cq.css';
import '../../css/x/xasz54-bm.css';
import '../../css/k/kjkbr1xrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gvys7u6cq"/><path class="xasz54-bm"/><path class="kjkbr1xrf"/></g>`,
		"fallback": "matita:columns-3",
	});
}

export default Component;
