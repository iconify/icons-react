import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jpsvqbbne.css';
import '../../css/b/b0_khmbrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jpsvqbbne secondary"/><path class="b0_khmbrg primary"/></g>`,
		"fallback": "iconaut:flip-vertical-duotone",
	});
}

export default Component;
