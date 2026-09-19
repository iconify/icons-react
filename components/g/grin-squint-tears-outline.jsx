import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6izixboo.css';
import '../../css/o/o86d_8b7c.css';
import '../../css/r/rxeidbcdm.css';
import '../../css/t/t5qk98btm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6izixboo"/><path class="o86d_8b7c"/><path clip-rule="evenodd" class="rxeidbcdm"/><path class="t5qk98btm"/></g>`,
		"fallback": "glyphs:grin-squint-tears-outline",
	});
}

export default Component;
