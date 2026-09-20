import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tpk6_tmir.css';
import '../../css/t/tbsfvltbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tpk6_tmir"/><path class="tbsfvltbz"/></g>`,
		"fallback": "pixelarticons:bed",
	});
}

export default Component;
