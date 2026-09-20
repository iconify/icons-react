import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lb_fc-mkl.css';
import '../../css/x/xoysycb5r.css';
import '../../css/h/h5do8rb-t.css';
import '../../css/x/xnntf6bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lb_fc-mkl"/><path class="xoysycb5r"/><path class="h5do8rb-t"/><path class="xnntf6bru"/></g>`,
		"fallback": "streamline-freehand-color:image-file-search",
	});
}

export default Component;
