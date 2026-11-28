import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy3l15beb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xf4w2jbwc.css';
import '../../css/a/a46hfsgsm.css';
import '../../css/a/aqma0ukti.css';
import '../../css/r/rca04vbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary zy3l15beb"/><g class="dt0cm9dhy primary"><path class="xf4w2jbwc"/><path class="a46hfsgsm"/><path class="aqma0ukti"/><path class="rca04vbpo"/></g>`,
		"fallback": "iconaut:coins-stack-duo",
	});
}

export default Component;
