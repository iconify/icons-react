import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i06fncccs.css';
import '../../css/w/w8vwaob6g.css';
import '../../css/d/doaackbrm.css';
import '../../css/a/a8_oiabwl.css';
import '../../css/z/zy8__7bfz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i06fncccs"/><path clip-rule="evenodd" class="w8vwaob6g"/><path clip-rule="evenodd" class="doaackbrm"/><path clip-rule="evenodd" class="a8_oiabwl"/><path class="zy8__7bfz"/></g>`,
		"fallback": "glyphs-poly:bell-exclamation",
	});
}

export default Component;
