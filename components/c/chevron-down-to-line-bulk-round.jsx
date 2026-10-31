import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xe3-hr2np.css';
import '../../css/e/e59aw4bgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xe3-hr2np"/><path class="e59aw4bgg"/></g>`,
		"fallback": "coolicons:chevron-down-to-line-bulk-round",
	});
}

export default Component;
