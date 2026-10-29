import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e127p9cjs.css';
import '../../css/i/izvj3goyw.css';
import '../../css/l/louq1sjgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e127p9cjs"/><path class="izvj3goyw wm-a"/><path class="louq1sjgq"/></g>`,
		"fallback": "withicons:bug-duo",
	});
}

export default Component;
