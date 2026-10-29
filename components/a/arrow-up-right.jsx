import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bu_4u5a3q.css';
import '../../css/k/khppcmayv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bu_4u5a3q"/><path class="khppcmayv wm-a"/></g>`,
		"fallback": "withicons:arrow-up-right",
	});
}

export default Component;
