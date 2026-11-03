import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgy2bfb1z.css';
import '../../css/u/uyj_e1b4g.css';
import '../../css/d/dw4u2gb_w.css';
import '../../css/x/xtsq4-jff.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qgy2bfb1z"/><path clip-rule="evenodd" class="uyj_e1b4g"/><path class="dw4u2gb_w"/><path class="xtsq4-jff"/>`,
		"fallback": "openmoji:discord",
	});
}

export default Component;
