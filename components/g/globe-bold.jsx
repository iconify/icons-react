import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sgmemqb3w.css';
import '../../css/f/fcfj16wrs.css';
import '../../css/t/tlmpzabnd.css';
import '../../css/m/mh5961bcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sgmemqb3w"/><path class="fcfj16wrs"/><path class="tlmpzabnd"/><path class="mh5961bcg"/></g>`,
		"fallback": "solar:globe-bold",
	});
}

export default Component;
