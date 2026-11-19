import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkakhcc8x.css';
import '../../css/x/x3__3mamu.css';
import '../../css/n/n8stxqxwu.css';
import '../../css/y/yc0oq_h1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pkakhcc8x"/><path class="x3__3mamu"/><path class="n8stxqxwu"/><path class="yc0oq_h1g"/></g>`,
		"fallback": "andrsrxn:creative-commons-sa",
	});
}

export default Component;
