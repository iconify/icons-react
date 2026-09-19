import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rohgp77ig.css';
import '../../css/w/wgt29qa_p.css';
import '../../css/s/smg7inkbg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rohgp77ig"/><path class="wgt29qa_p"/><path class="smg7inkbg"/></g>`,
		"fallback": "glyphs-poly:align-items-side",
	});
}

export default Component;
