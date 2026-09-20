import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ab-lu3bmj.css';
import '../../css/q/qqr5pzbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ab-lu3bmj"/><path class="qqr5pzbuv"/></g>`,
		"fallback": "reicon:bluetooth-rectangle-filled",
	});
}

export default Component;
