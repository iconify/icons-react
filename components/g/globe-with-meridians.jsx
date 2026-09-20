import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz-_5oksg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/usozxnbrm.css';
import '../../css/y/y4f-t_i2z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="sz-_5oksg"/><g class="ij2x_72vy"><circle class="usozxnbrm"/><path class="y4f-t_i2z"/></g>`,
		"fallback": "openmoji:globe-with-meridians",
	});
}

export default Component;
