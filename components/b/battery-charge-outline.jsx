import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-ej1f0ud.css';
import '../../css/m/m24p57kbj.css';
import '../../css/i/il4xqrbrm.css';
import '../../css/c/cs2xpclua.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b-ej1f0ud"/><path clip-rule="evenodd" class="m24p57kbj"/><path class="il4xqrbrm"/><path clip-rule="evenodd" class="cs2xpclua"/></g>`,
		"fallback": "glyphs:battery-charge-outline",
	});
}

export default Component;
