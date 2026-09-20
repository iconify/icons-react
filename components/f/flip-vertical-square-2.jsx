import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvsaoacfu.css';
import '../../css/p/pjbig4bcq.css';
import '../../css/y/y_u1phb_j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bvsaoacfu"/><path class="pjbig4bcq"/><path class="y_u1phb_j"/></g>`,
		"fallback": "streamline-color:flip-vertical-square-2",
	});
}

export default Component;
