import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hgn_rwb7w.css';
import '../../css/l/l2vwtcbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hgn_rwb7w"/><path class="l2vwtcbnj"/></g>`,
		"fallback": "coolicons:apple-logo-bulk-round",
	});
}

export default Component;
