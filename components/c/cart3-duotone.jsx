import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zk2jq5bcw.css';
import '../../css/q/qldn5iwtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zk2jq5bcw"/><path class="qldn5iwtc"/></g>`,
		"fallback": "reicon:cart3-duotone",
	});
}

export default Component;
