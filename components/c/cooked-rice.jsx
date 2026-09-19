import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/prapd_bmm.css';
import '../../css/t/t_rpkc3rj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="prapd_bmm"/><path class="t_rpkc3rj"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cooked-rice",
	});
}

export default Component;
