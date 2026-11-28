import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkzl7vbnv.css';
import '../../css/n/nf1ladbqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nkzl7vbnv secondary"/><path class="nf1ladbqp primary"/></g>`,
		"fallback": "iconaut:chart-bullet-duotone",
	});
}

export default Component;
