import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ld--md47p.css';
import '../../css/e/en10s2byp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ld--md47p"/><path class="en10s2byp"/></g>`,
		"fallback": "coolicons:code-sparkle-bulk-round",
	});
}

export default Component;
