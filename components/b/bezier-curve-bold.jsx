import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aq0x21h-i.css';
import '../../css/d/dpafqgbph.css';
import '../../css/v/vja-mbcsd.css';
import '../../css/l/lw-kuab_s.css';
import '../../css/x/xs5iv-0fy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aq0x21h-i"/><path class="dpafqgbph"/><path class="vja-mbcsd"/><circle class="lw-kuab_s"/><circle class="xs5iv-0fy"/></g>`,
		"fallback": "glyphs:bezier-curve-bold",
	});
}

export default Component;
