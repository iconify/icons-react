import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxii6vbsf.css';
import '../../css/q/q8lhtgbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxii6vbsf"/><path class="q8lhtgbox"/></g>`,
		"fallback": "reicon:circle-arrow-left-up-duotone",
	});
}

export default Component;
