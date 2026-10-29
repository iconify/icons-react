import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/ndvufqr1x.css';
import '../../css/l/l-t4b1bzb.css';
import '../../css/w/w_iteobnw.css';
import '../../css/c/c5b0y0tyz.css';
import '../../css/b/b5x9xi0bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ndvufqr1x"/><path class="l-t4b1bzb wm-a"/><path class="w_iteobnw wm-s"/><path class="c5b0y0tyz"/><path class="b5x9xi0bu wm-a"/></g>`,
		"fallback": "withicons:copy-check-duo",
	});
}

export default Component;
