import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pz07x8bnt.css';
import '../../css/l/lmr515oji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pz07x8bnt"/><path class="lmr515oji"/></g>`,
		"fallback": "reicon:diagram-down",
	});
}

export default Component;
