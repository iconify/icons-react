import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evj9cobzj.css';
import '../../css/n/nl4w20j2f.css';
import '../../css/h/hbro6cckb.css';
import '../../css/y/y7h112emc.css';
import '../../css/o/ocx8ghbjl.css';
import '../../css/w/wrf1268we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="evj9cobzj wm-k"/><path class="nl4w20j2f wm-k"/><path class="hbro6cckb wm-k"/><path class="wm-a y7h112emc"/><path class="ocx8ghbjl wm-a"/><path class="wm-a wrf1268we"/></g>`,
		"fallback": "withicons-anime:binary",
	});
}

export default Component;
