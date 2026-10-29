import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f1iyce6_y.css';
import '../../css/e/ev6-t-xbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f1iyce6_y"/><path class="ev6-t-xbj wm-a"/></g>`,
		"fallback": "withicons:cube",
	});
}

export default Component;
