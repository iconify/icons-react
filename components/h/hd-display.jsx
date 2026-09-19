import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dvg-mhlmx.css';
import '../../css/q/qpm_gor2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dvg-mhlmx"/><path class="qpm_gor2e"/></g>`,
		"fallback": "iconoir:hd-display",
	});
}

export default Component;
