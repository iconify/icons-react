import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ag3n6_vml.css';
import '../../css/y/y4l-okf5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ag3n6_vml"/><path class="y4l-okf5y"/></g>`,
		"fallback": "healthicons:family-planning-24px",
	});
}

export default Component;
