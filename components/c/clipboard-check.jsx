import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cogs88p7l.css';
import '../../css/a/a_u4ptbkw.css';
import '../../css/g/gq3c6gp4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cogs88p7l"/><path class="a_u4ptbkw"/><path class="gq3c6gp4v"/></g>`,
		"fallback": "iconoir:clipboard-check",
	});
}

export default Component;
