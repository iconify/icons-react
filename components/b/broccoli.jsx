import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xnq8y0bii.css';
import '../../css/x/x7vykfack.css';
import '../../css/w/wh4ek8hbt.css';
import '../../css/l/lmv-lc_gk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xnq8y0bii"/><path class="x7vykfack"/><path class="wh4ek8hbt"/><path class="lmv-lc_gk"/></g>`,
		"fallback": "tdesign:broccoli",
	});
}

export default Component;
