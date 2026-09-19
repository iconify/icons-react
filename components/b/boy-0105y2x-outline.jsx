import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qh68tkb-i.css';
import '../../css/y/y0gfgtymo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qh68tkb-i"/><path class="y0gfgtymo"/></g>`,
		"fallback": "healthicons:boy-0105y2x-outline",
	});
}

export default Component;
