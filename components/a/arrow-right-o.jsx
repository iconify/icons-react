import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/essunczlg.css';
import '../../css/a/a8a9i1b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="essunczlg"/><path clip-rule="evenodd" class="a8a9i1b0n"/></g>`,
		"fallback": "gg:arrow-right-o",
	});
}

export default Component;
