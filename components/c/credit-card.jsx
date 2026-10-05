import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e-arpcbrk.css';
import '../../css/r/rz9e0z9ds.css';
import '../../css/g/g5xh24bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="e-arpcbrk"/><path class="rz9e0z9ds"/><path class="g5xh24bof"/></g>`,
		"fallback": "matita:credit-card",
	});
}

export default Component;
