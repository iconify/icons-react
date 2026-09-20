import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/upzcu-biu.css';
import '../../css/q/qz6h_ebto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="upzcu-biu"/><path clip-rule="evenodd" class="qz6h_ebto"/></g>`,
		"fallback": "reicon:bell-ring",
	});
}

export default Component;
