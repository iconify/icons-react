import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h3s9dhqgn.css';
import '../../css/w/wf885acsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h3s9dhqgn"/><path class="wf885acsc"/></g>`,
		"fallback": "iconoir:angle-tool",
	});
}

export default Component;
