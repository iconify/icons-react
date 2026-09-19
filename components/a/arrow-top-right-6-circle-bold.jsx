import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/y/ycmx1acwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><circle class="m4l-9ybuj"/><path class="ycmx1acwl"/></g>`,
		"fallback": "iconamoon:arrow-top-right-6-circle-bold",
	});
}

export default Component;
