import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lor8d2bnk.css';
import '../../css/w/wsf0lgbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lor8d2bnk"/><path class="wsf0lgbwj"/></g>`,
		"fallback": "solar:call-dropped-bold",
	});
}

export default Component;
