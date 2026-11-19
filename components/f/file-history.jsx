import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1yhvpbks.css';
import '../../css/w/w6uhcybse.css';
import '../../css/j/j8okfubos.css';
import '../../css/r/rld3ezbqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t1yhvpbks"/><path class="w6uhcybse"/><path class="j8okfubos"/><path class="rld3ezbqn"/></g>`,
		"fallback": "andrsrxn:file-history",
	});
}

export default Component;
