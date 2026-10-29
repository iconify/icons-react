import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/azxfktbgs.css';
import '../../css/z/zhjtmfbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="azxfktbgs"/><path class="wm-a zhjtmfbrj"/></g>`,
		"fallback": "withicons:chevron-last-duo",
	});
}

export default Component;
