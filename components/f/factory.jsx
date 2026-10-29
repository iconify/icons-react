import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z31jlbbvb.css';
import '../../css/n/ngj96acjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z31jlbbvb"/><path class="ngj96acjh wm-a"/></g>`,
		"fallback": "withicons:factory",
	});
}

export default Component;
