import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0n9ejb6w.css';
import '../../css/z/z824g7a8m.css';
import '../../css/o/o751h38_q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0n9ejb6w"/><path class="z824g7a8m"/><path class="o751h38_q"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bullseye",
	});
}

export default Component;
