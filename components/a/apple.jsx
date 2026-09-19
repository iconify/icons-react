import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-6326bns.css';
import '../../css/k/k4i372_ej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-6326bns"/><path class="k4i372_ej"/></g>`,
		"fallback": "icon-park-outline:apple",
	});
}

export default Component;
