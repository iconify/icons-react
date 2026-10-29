import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/awdc86bkd.css';
import '../../css/z/zcailen-n.css';
import '../../css/y/ymslj3bui.css';
import '../../css/w/wan0wh8nu.css';
import '../../css/s/sloze7bte.css';
import '../../css/u/uzb7c3bcc.css';
import '../../css/f/f4t6b_04t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="awdc86bkd wm-k"/><path class="wm-shadow zcailen-n"/><path class="wm-k ymslj3bui"/><path class="wan0wh8nu wm-k"/><path class="sloze7bte wm-k"/><path class="uzb7c3bcc wm-k"/><path class="f4t6b_04t wm-a"/></g>`,
		"fallback": "withicons:avatar-koala-engrave",
	});
}

export default Component;
