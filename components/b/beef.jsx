import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qzof9nhok.css';
import '../../css/u/u5j49objb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qzof9nhok"/><path class="u5j49objb wm-a"/></g>`,
		"fallback": "withicons:beef",
	});
}

export default Component;
