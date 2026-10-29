import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uh01hzbyb.css';
import '../../css/a/abeza2b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uh01hzbyb"/><path class="abeza2b1z wm-a"/></g>`,
		"fallback": "withicons:heart-crack",
	});
}

export default Component;
