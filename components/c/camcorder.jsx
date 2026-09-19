import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/us3b29bhz.css';
import '../../css/z/zg2y63d-t.css';
import '../../css/m/muicpnbkb.css';
import '../../css/h/hnl-k1btp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="us3b29bhz"/><path clip-rule="evenodd" class="zg2y63d-t"/><path class="muicpnbkb"/><path clip-rule="evenodd" class="hnl-k1btp"/></g>`,
		"fallback": "glyphs-poly:camcorder",
	});
}

export default Component;
