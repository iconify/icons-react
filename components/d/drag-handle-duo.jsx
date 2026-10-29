import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mji25nd4r.css';
import '../../css/t/tpjg30w-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mji25nd4r"/><path class="tpjg30w-t"/></g>`,
		"fallback": "withicons:drag-handle-duo",
	});
}

export default Component;
