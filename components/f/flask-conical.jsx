import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zxdihacgb.css';
import '../../css/n/n-07r-b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zxdihacgb"/><path class="n-07r-b5s wm-a"/></g>`,
		"fallback": "withicons:flask-conical",
	});
}

export default Component;
