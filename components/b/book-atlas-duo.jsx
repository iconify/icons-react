import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z67_wkbeg.css';
import '../../css/s/snjledccd.css';
import '../../css/e/eu31d_bii.css';
import '../../css/t/tybfplb3s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z67_wkbeg"/><path class="snjledccd"/><path class="eu31d_bii"/><path class="tybfplb3s"/></g>`,
		"fallback": "glyphs:book-atlas-duo",
	});
}

export default Component;
