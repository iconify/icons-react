import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb1_iccvv.css';
import '../../css/t/t_3b85rqk.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="jb1_iccvv"/><path class="t_3b85rqk"/></g>`,
		"fallback": "skill-icons:fastapi",
	});
}

export default Component;
