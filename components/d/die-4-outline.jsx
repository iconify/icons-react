import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/ojnvnib6l.css';
import '../../css/p/pg-pw1_lh.css';
import '../../css/z/z3u09jb2h.css';
import '../../css/i/i6q05pbsj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ojnvnib6l"/><path class="pg-pw1_lh"/><path class="z3u09jb2h"/><path class="i6q05pbsj"/></g>`,
		"fallback": "glyphs:die-4-outline",
	});
}

export default Component;
