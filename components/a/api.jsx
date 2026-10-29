import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bykglcbce.css';
import '../../css/w/wdxpo1vxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bykglcbce"/><path class="wdxpo1vxi wm-a"/></g>`,
		"fallback": "withicons:api",
	});
}

export default Component;
