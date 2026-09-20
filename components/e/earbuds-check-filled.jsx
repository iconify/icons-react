import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpver0bmr.css';
import '../../css/x/xq9g9ub1r.css';
import '../../css/e/ewlg4yi8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xpver0bmr"/><path class="xq9g9ub1r"/><path clip-rule="evenodd" class="ewlg4yi8a"/></g>`,
		"fallback": "reicon:earbuds-check-filled",
	});
}

export default Component;
