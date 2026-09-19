import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbhhlhnat.css';
import '../../css/z/zr558xbae.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbhhlhnat"/><path class="zr558xbae"/></g>`,
		"fallback": "glyphs:edit-duo",
	});
}

export default Component;
