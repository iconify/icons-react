import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fl67tqbjf.css';
import '../../css/l/ls1013bdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fl67tqbjf"/><path class="ls1013bdu"/></g>`,
		"fallback": "nrk:eye-slash-expressive",
	});
}

export default Component;
