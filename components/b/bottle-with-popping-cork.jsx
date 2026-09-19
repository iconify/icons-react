import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q92zkvbnj.css';
import '../../css/n/nj7hs3bjf.css';
import '../../css/s/s1dd07bvp.css';
import '../../css/j/jhhz4obvr.css';
import '../../css/e/e88f6e3wz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q92zkvbnj"/><path class="nj7hs3bjf"/><path class="s1dd07bvp"/><path class="jhhz4obvr"/><path class="e88f6e3wz"/></g>`,
		"fallback": "fluent-emoji-flat:bottle-with-popping-cork",
	});
}

export default Component;
