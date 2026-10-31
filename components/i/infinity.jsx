import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dfz3c_bsd.css';
import '../../css/y/yhg_y2bnx.css';
import '../../css/q/qoumlbiet.css';
import '../../css/s/s9v7j6byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dfz3c_bsd wm-shadow"/><path class="wm-shadow yhg_y2bnx"/><path class="qoumlbiet"/><path class="s9v7j6byl"/></g>`,
		"fallback": "withicons-brutal:infinity",
	});
}

export default Component;
