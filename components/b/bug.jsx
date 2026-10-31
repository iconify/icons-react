import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d7-2j3b_l.css';
import '../../css/a/alprjkbuk.css';
import '../../css/k/kw9emrbos.css';
import '../../css/f/f7u0_3qmj.css';
import '../../css/q/qftri9vyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="d7-2j3b_l wm-shadow"/><path class="alprjkbuk wm-shadow"/><path class="kw9emrbos"/><path class="f7u0_3qmj"/><path class="qftri9vyv"/></g>`,
		"fallback": "withicons-brutal:bug",
	});
}

export default Component;
