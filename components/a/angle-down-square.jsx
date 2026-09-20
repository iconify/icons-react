import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wgt0i8bpe.css';
import '../../css/g/gjsof6bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wgt0i8bpe"/><path clip-rule="evenodd" class="gjsof6bxx"/></g>`,
		"fallback": "reicon:angle-down-square",
	});
}

export default Component;
