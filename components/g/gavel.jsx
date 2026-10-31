import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wdau7zb3q.css';
import '../../css/o/oe67qbcyn.css';
import '../../css/l/lo5oiql7f.css';
import '../../css/e/ejv5t15qo.css';
import '../../css/d/diiq2m6zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wdau7zb3q wm-shadow"/><path class="oe67qbcyn"/><path class="lo5oiql7f"/><path class="ejv5t15qo"/><path class="diiq2m6zf wm-s"/></g>`,
		"fallback": "withicons-retro:gavel",
	});
}

export default Component;
