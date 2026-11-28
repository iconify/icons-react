import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ah0urkbhs.css';
import '../../css/t/tc93pxbsj.css';
import '../../css/s/sq0pxym8x.css';
import '../../css/s/s-rb7rb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ah0urkbhs"/><path class="tc93pxbsj"/><path class="sq0pxym8x"/><path class="s-rb7rb4a"/></g>`,
		"fallback": "iconaut:hand-bell",
	});
}

export default Component;
