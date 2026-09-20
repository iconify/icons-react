import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sa9ny5b5h.css';
import '../../css/t/tgvqd1bdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sa9ny5b5h"/><path class="tgvqd1bdt"/></g>`,
		"fallback": "reicon:dialog2-duotone",
	});
}

export default Component;
