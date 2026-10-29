import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vrm34f8gd.css';
import '../../css/o/ows2wwb4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vrm34f8gd"/><path class="ows2wwb4n wm-a"/></g>`,
		"fallback": "withicons:cherry",
	});
}

export default Component;
