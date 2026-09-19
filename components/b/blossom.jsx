import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jl-57pbvt.css';
import '../../css/z/z60cedbpf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jl-57pbvt"/><path class="z60cedbpf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:blossom",
	});
}

export default Component;
