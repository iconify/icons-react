import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbnqp1b-k.css';
import '../../css/t/tbj5_eb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zbnqp1b-k"/><path class="tbj5_eb0m"/></g>`,
		"fallback": "reicon:bolt-duotone",
	});
}

export default Component;
