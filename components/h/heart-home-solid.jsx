import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vrsa6ibrc.css';
import '../../css/w/wnpfj0buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vrsa6ibrc"/><path class="wnpfj0buq"/></g>`,
		"fallback": "mynaui:heart-home-solid",
	});
}

export default Component;
