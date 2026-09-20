import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bw4csls0j.css';
import '../../css/e/ebg3v4xfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bw4csls0j"/><path clip-rule="evenodd" class="ebg3v4xfg"/></g>`,
		"fallback": "reicon:calculator3",
	});
}

export default Component;
