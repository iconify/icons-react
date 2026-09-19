import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/ml8bywbdq.css';
import '../../css/p/pixyyvbhs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ml8bywbdq"/><path class="pixyyvbhs"/></g>`,
		"fallback": "healthicons:death-alt2x-outline",
	});
}

export default Component;
