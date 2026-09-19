import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsfzcsbqb.css';
import '../../css/r/ri140fi6g.css';
import '../../css/x/xi_2clbvo.css';
import '../../css/z/zrlmoqz6q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsfzcsbqb"/><path class="ri140fi6g"/><path class="xi_2clbvo"/><path class="zrlmoqz6q"/></g>`,
		"fallback": "glyphs:car-tilt-duo",
	});
}

export default Component;
