import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7xg-d9mp.css';
import '../../css/s/sixno4ylc.css';
import '../../css/x/x4439ol_e.css';
import '../../css/e/ei-qnj_wh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7xg-d9mp"/><path clip-rule="evenodd" class="sixno4ylc"/><path class="x4439ol_e"/><path clip-rule="evenodd" class="ei-qnj_wh"/></g>`,
		"fallback": "glyphs:file-remove-outline",
	});
}

export default Component;
