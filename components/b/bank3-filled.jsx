import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qeqsvab3a.css';
import '../../css/l/l2re5ab_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qeqsvab3a"/><path class="l2re5ab_n"/></g>`,
		"fallback": "reicon:bank3-filled",
	});
}

export default Component;
