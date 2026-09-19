import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xr2ju7b_h.css';
import '../../css/k/kqg7zabzh.css';
import '../../css/y/yba4zeihl.css';
import '../../css/f/fudyny6gj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xr2ju7b_h"/><path clip-rule="evenodd" class="kqg7zabzh"/><path class="yba4zeihl"/><path clip-rule="evenodd" class="fudyny6gj"/></g>`,
		"fallback": "glyphs:comment-question-outline",
	});
}

export default Component;
