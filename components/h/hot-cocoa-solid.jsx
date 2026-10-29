import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pi2eee_op.css';
import '../../css/y/y2w64wyfm.css';
import '../../css/a/aqfn421rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pi2eee_op"/><path class="wm-a y2w64wyfm"/><path class="aqfn421rq wm-s"/></g>`,
		"fallback": "withicons:hot-cocoa-solid",
	});
}

export default Component;
