import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztj30dbhe.css';
import '../../css/b/b2-egkbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ztj30dbhe"/><path class="b2-egkbjo primary"/></g>`,
		"fallback": "iconaut:empty-set-duotone",
	});
}

export default Component;
