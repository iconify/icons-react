import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zxlg08bmk.css';
import '../../css/f/fxop-obuo.css';
import '../../css/b/bx2746byo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zxlg08bmk"/><path class="fxop-obuo"/><path class="bx2746byo"/></g>`,
		"fallback": "reicon:eraser-duotone",
	});
}

export default Component;
