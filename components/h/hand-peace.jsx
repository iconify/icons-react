import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sdv76db5f.css';
import '../../css/c/creav31ww.css';
import '../../css/l/l-juphbhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sdv76db5f"/><path class="creav31ww"/><path class="l-juphbhp"/></g>`,
		"fallback": "andrsrxn:hand-peace",
	});
}

export default Component;
