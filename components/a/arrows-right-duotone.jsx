import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f84l44btc.css';
import '../../css/o/o_mtp31nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f84l44btc"/><path clip-rule="evenodd" class="o_mtp31nf"/></g>`,
		"fallback": "reicon:arrows-right-duotone",
	});
}

export default Component;
