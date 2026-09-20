import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fgbg37blj.css';
import '../../css/v/vwdk-t4kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fgbg37blj"/><path class="vwdk-t4kr"/></g>`,
		"fallback": "reicon:chair-duotone",
	});
}

export default Component;
