import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b1tvrvbwj.css';
import '../../css/g/gjrpracpq.css';
import '../../css/n/nnt7-9b5p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b1tvrvbwj"/><path class="gjrpracpq"/><path class="nnt7-9b5p"/></g>`,
		"fallback": "fluent-emoji-high-contrast:curry-rice",
	});
}

export default Component;
