import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x13x7hbqs.css';
import '../../css/l/lv7l4ebet.css';
import '../../css/y/ylyvn55cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x13x7hbqs"/><path class="lv7l4ebet"/><path class="ylyvn55cw"/></g>`,
		"fallback": "andrsrxn:chalkboard-user",
	});
}

export default Component;
