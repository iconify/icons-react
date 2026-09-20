import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xcbzr4b0x.css';
import '../../css/j/j66bahacm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xcbzr4b0x"/><path class="j66bahacm"/></g>`,
		"fallback": "solar:arrow-to-top-left-line-duotone",
	});
}

export default Component;
