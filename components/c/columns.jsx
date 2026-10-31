import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/v/voxgwkbby.css';
import '../../css/y/y-b-94b4e.css';
import '../../css/q/q6_8xjbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="voxgwkbby"/><path class="y-b-94b4e"/><path class="q6_8xjbkh"/></g>`,
		"fallback": "withicons-brutal:columns",
	});
}

export default Component;
