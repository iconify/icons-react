import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqax-6b-d.css';
import '../../css/m/m7x1a70ua.css';
import '../../css/x/xyu3ddcdi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jqax-6b-d"><path class="m7x1a70ua"/><path class="xyu3ddcdi"/></g>`,
		"fallback": "streamline-plump:hospital-sign-square",
	});
}

export default Component;
