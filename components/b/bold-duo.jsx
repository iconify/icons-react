import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pc5v_yb4a.css';
import '../../css/r/r1-lpnfzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pc5v_yb4a"/><path class="r1-lpnfzi"/></g>`,
		"fallback": "withicons:bold-duo",
	});
}

export default Component;
