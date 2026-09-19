import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x59jwccsz.css';
import '../../css/r/r_wktcm2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x59jwccsz"/><path clip-rule="evenodd" class="r_wktcm2a"/></g>`,
		"fallback": "gg:games",
	});
}

export default Component;
