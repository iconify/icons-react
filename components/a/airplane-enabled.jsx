import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjjg3-k8y.css';
import '../../css/f/fsmkeio1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kjjg3-k8y"/><path class="fsmkeio1d"/></g>`,
		"fallback": "streamline-color:airplane-enabled",
	});
}

export default Component;
