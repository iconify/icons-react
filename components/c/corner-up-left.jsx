import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a0j3l762m.css';
import '../../css/q/qum0vnbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a0j3l762m"/><path class="qum0vnbsk wm-a"/></g>`,
		"fallback": "withicons:corner-up-left",
	});
}

export default Component;
