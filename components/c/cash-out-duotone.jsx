import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j93ro26ki.css';
import '../../css/x/xbsory7gu.css';
import '../../css/u/uo71iobjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j93ro26ki"/><path class="xbsory7gu"/><path class="uo71iobjh"/></g>`,
		"fallback": "reicon:cash-out-duotone",
	});
}

export default Component;
