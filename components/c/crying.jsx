import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkh622bdk.css';
import '../../css/j/j335jebjt.css';
import '../../css/d/df7y4kbsr.css';
import '../../css/j/j13xjhq4u.css';
import '../../css/d/dr_tp8gfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkh622bdk"/><path class="j335jebjt"/><path class="df7y4kbsr"/><path class="j13xjhq4u"/><path class="dr_tp8gfx"/>`,
		"fallback": "fxemoji:crying",
	});
}

export default Component;
