import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-lxhubvx.css';
import '../../css/t/tfvn7tbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-lxhubvx"/><path class="tfvn7tbxz"/></g>`,
		"fallback": "reicon:dollar-reload",
	});
}

export default Component;
