import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qnvpo9bhd.css';
import '../../css/g/gz1qhtbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qnvpo9bhd"/><path class="gz1qhtbpb"/></g>`,
		"fallback": "coolicons:caravan-bulk-round",
	});
}

export default Component;
