import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mdvkx-geo.css';
import '../../css/u/uxz8njb2w.css';
import '../../css/i/i-oq5ub8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mdvkx-geo"/><path class="uxz8njb2w"/><path class="i-oq5ub8f wm-a"/></g>`,
		"fallback": "withicons:avatar-bear",
	});
}

export default Component;
