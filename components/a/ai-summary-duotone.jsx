import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8z57gbgd.css';
import '../../css/f/fm67svdhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e8z57gbgd secondary"/><path class="fm67svdhg primary"/></g>`,
		"fallback": "iconaut:ai-summary-duotone",
	});
}

export default Component;
