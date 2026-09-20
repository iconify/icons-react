import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2b66ri7w.css';
import '../../css/t/tdr1i3byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2b66ri7w"/><path class="tdr1i3byv"/></g>`,
		"fallback": "reicon:arrow-down2-duotone",
	});
}

export default Component;
