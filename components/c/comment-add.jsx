import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_wdxn8ce.css';
import '../../css/k/k82jeybsw.css';
import '../../css/l/lqoaljmvr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c_wdxn8ce"/><path class="k82jeybsw"/><path class="lqoaljmvr"/></g>`,
		"fallback": "glyphs-poly:comment-add",
	});
}

export default Component;
