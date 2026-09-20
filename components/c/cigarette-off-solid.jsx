import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1nu_cbbl.css';
import '../../css/x/x5dhepbol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b1nu_cbbl"/><path class="x5dhepbol"/></g>`,
		"fallback": "mynaui:cigarette-off-solid",
	});
}

export default Component;
