import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cf7nx1v6t.css';
import '../../css/n/ng1w20v5k.css';
import '../../css/l/lj6dfgbvz.css';
import '../../css/e/eux2od3_k.css';
import '../../css/l/ltsoklbui.css';
import '../../css/q/qlfh8bpxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cf7nx1v6t wm-shadow"/><path class="ng1w20v5k"/><path class="lj6dfgbvz"/><path class="eux2od3_k"/><path class="ltsoklbui"/><path class="qlfh8bpxb"/></g>`,
		"fallback": "withicons-retro:calendar-span",
	});
}

export default Component;
