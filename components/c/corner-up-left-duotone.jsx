import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yz84htb0k.css';
import '../../css/q/qgh4cpb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary yz84htb0k"/><path class="primary qgh4cpb-b"/></g>`,
		"fallback": "iconaut:corner-up-left-duotone",
	});
}

export default Component;
