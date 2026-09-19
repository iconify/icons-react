import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tksqao2mj.css';
import '../../css/c/cbu4rlgab.css';
import '../../css/o/oyhw-wmkp.css';
import '../../css/i/iyt8sybqd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tksqao2mj"/><g class="cbu4rlgab"><path class="oyhw-wmkp"/><path class="iyt8sybqd"/></g>`,
		"fallback": "flat-color-icons:end-call",
	});
}

export default Component;
