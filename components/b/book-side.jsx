import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xc39fng4b.css';
import '../../css/f/fn_cxq3dw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xc39fng4b"/><path class="fn_cxq3dw"/></g>`,
		"fallback": "glyphs-poly:book-side",
	});
}

export default Component;
