import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/afxhqj_bi.css';
import '../../css/s/sjrxxibyh.css';
import '../../css/h/hknb5ny6g.css';
import '../../css/u/u5dih_boo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="afxhqj_bi wm-shadow"/><path class="sjrxxibyh"/><path class="hknb5ny6g"/><path class="u5dih_boo"/></g>`,
		"fallback": "withicons-retro:cookie",
	});
}

export default Component;
