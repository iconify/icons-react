import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlx_4mbot.css';
import '../../css/k/kqg7zabzh.css';
import '../../css/d/d2q55zbzu.css';
import '../../css/f/fudyny6gj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlx_4mbot"/><path clip-rule="evenodd" class="kqg7zabzh"/><path class="d2q55zbzu"/><path clip-rule="evenodd" class="fudyny6gj"/></g>`,
		"fallback": "glyphs:comment-add-outline",
	});
}

export default Component;
