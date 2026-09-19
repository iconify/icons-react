import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kfsfyn02l.css';
import '../../css/q/qbmterf1u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kfsfyn02l"/><path clip-rule="evenodd" class="qbmterf1u"/></g>`,
		"fallback": "pepicons:film-frame-print",
	});
}

export default Component;
