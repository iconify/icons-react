import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co_h0gbph.css';
import '../../css/f/fm_ababnf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="co_h0gbph"/><path class="fm_ababnf"/></g>`,
		"fallback": "glyphs-poly:cloud",
	});
}

export default Component;
