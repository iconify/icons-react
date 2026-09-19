import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd3od2-zf.css';
import '../../css/e/evv8tz29n.css';
import '../../css/n/npphhda2s.css';
import '../../css/x/xw_ykbbuu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rd3od2-zf"/><path clip-rule="evenodd" class="evv8tz29n"/><path class="npphhda2s"/><path clip-rule="evenodd" class="xw_ykbbuu"/></g>`,
		"fallback": "glyphs:industry-outline",
	});
}

export default Component;
