import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j4coc8bcl.css';
import '../../css/g/gz8trboui.css';
import '../../css/w/w683lym1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="j4coc8bcl"/><path class="gz8trboui"/><path class="w683lym1i"/></g>`,
		"fallback": "hugeicons:dumbbell-02",
	});
}

export default Component;
