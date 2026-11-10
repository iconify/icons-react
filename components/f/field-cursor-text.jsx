import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcln-ibxk.css';
import '../../css/u/u_is3mi2v.css';
import '../../css/i/itba1rjmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rcln-ibxk"/><path class="u_is3mi2v"/><path class="itba1rjmq"/></g>`,
		"fallback": "andrsrxn:field-cursor-text",
	});
}

export default Component;
