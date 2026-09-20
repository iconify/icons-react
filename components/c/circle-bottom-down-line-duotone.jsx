import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnnmu45mf.css';
import '../../css/u/uo5gp5bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnnmu45mf"/><path class="uo5gp5bll"/></g>`,
		"fallback": "solar:circle-bottom-down-line-duotone",
	});
}

export default Component;
