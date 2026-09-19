import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/e/exm6i4gtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><circle class="m4l-9ybuj"/><path class="exm6i4gtw"/></g>`,
		"fallback": "iconamoon:arrow-top-left-6-circle-bold",
	});
}

export default Component;
