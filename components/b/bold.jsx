import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/ri28hvyet.css';
import '../../css/v/vs81s0bpq.css';
import '../../css/t/tbkowycdr.css';
import '../../css/p/pqmpltb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="ri28hvyet"/><path class="vs81s0bpq"/><path class="tbkowycdr"/><path class="pqmpltb_u"/></g>`,
		"fallback": "matita:bold",
	});
}

export default Component;
