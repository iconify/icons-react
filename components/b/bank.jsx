import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rqv1gomtd.css';
import '../../css/t/t0j7vybue.css';
import '../../css/a/aqe47bbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rqv1gomtd"/><path clip-rule="evenodd" class="t0j7vybue"/><path class="aqe47bbrw"/></g>`,
		"fallback": "reicon:bank",
	});
}

export default Component;
