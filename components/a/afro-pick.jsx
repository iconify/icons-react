import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/id40s-zgk.css';
import '../../css/m/m710_q-or.css';
import '../../css/a/a66psgbgv.css';
import '../../css/e/eebtdobhf.css';
import '../../css/q/qfi8fyb0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="id40s-zgk"/><path class="m710_q-or"/><path class="a66psgbgv"/><path class="eebtdobhf"/><path class="qfi8fyb0p"/></g>`,
		"fallback": "icon-park:afro-pick",
	});
}

export default Component;
