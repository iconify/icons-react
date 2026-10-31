import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g0y7-mbjg.css';
import '../../css/g/ga_o8ubhy.css';
import '../../css/w/wo89xnbgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="g0y7-mbjg wm-k"/><path class="ga_o8ubhy wm-a"/><path class="wm-deco wo89xnbgv"/></g>`,
		"fallback": "withicons-kawaii:corner-up-left",
	});
}

export default Component;
