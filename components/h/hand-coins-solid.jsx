import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yi06d5b1l.css';
import '../../css/g/gy42a2ftq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="yi06d5b1l"/><path class="gy42a2ftq wm-a"/></g>`,
		"fallback": "withicons:hand-coins-solid",
	});
}

export default Component;
