import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mnl7dkj9l.css';
import '../../css/c/cxqq2bb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mnl7dkj9l"/><path class="cxqq2bb8m"/></g>`,
		"fallback": "withicons-retro:arrow-down",
	});
}

export default Component;
