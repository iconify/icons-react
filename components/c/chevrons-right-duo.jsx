import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bnbj9bspw.css';
import '../../css/e/et5-78afr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bnbj9bspw"/><path class="et5-78afr wm-a"/></g>`,
		"fallback": "withicons:chevrons-right-duo",
	});
}

export default Component;
