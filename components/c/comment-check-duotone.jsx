import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g18yl9blq.css';
import '../../css/j/jobcptooe.css';
import '../../css/w/wxjuyjb5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g18yl9blq"/><path class="jobcptooe"/><path class="wxjuyjb5k"/></g>`,
		"fallback": "iconamoon:comment-check-duotone",
	});
}

export default Component;
