import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fuzboabpd.css';
import '../../css/k/k4p40ejxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fuzboabpd"/><path class="k4p40ejxg"/></g>`,
		"fallback": "reicon:bitcoin-convert-filled",
	});
}

export default Component;
