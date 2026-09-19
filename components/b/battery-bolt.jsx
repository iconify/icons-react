import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tr6gbxluw.css';
import '../../css/k/knq1obbqm.css';
import '../../css/r/rlafmm9-k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tr6gbxluw"/><path clip-rule="evenodd" class="knq1obbqm"/><path class="rlafmm9-k"/></g>`,
		"fallback": "glyphs-poly:battery-bolt",
	});
}

export default Component;
