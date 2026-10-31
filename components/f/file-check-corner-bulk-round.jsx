import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e25vz7cbi.css';
import '../../css/b/bnuqlv0dt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e25vz7cbi"/><path class="bnuqlv0dt"/></g>`,
		"fallback": "coolicons:file-check-corner-bulk-round",
	});
}

export default Component;
