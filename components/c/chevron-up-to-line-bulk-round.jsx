import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdlo5cbhf.css';
import '../../css/b/byojx7bma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sdlo5cbhf"/><path class="byojx7bma"/></g>`,
		"fallback": "coolicons:chevron-up-to-line-bulk-round",
	});
}

export default Component;
