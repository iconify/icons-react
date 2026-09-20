import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7rmoj84q.css';
import '../../css/x/xp2g_2hpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7rmoj84q"/><path clip-rule="evenodd" class="xp2g_2hpk"/></g>`,
		"fallback": "streamline-sharp-color:attribution-flat",
	});
}

export default Component;
