import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xalhp48-p.css';
import '../../css/j/jgs_1fbzk.css';
import '../../css/d/d_giv3k3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xalhp48-p"/><path class="jgs_1fbzk"/><path class="d_giv3k3j"/></g>`,
		"fallback": "andrsrxn:hand-pointer",
	});
}

export default Component;
