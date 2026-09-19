import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bp-skte0x.css';
import '../../css/w/w315tgbyz.css';
import '../../css/k/kb36qtbpx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bp-skte0x"/><path class="w315tgbyz"/><path class="kb36qtbpx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bookmark-tabs",
	});
}

export default Component;
