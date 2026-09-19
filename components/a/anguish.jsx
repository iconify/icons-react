import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkh622bdk.css';
import '../../css/d/dr_tp8gfx.css';
import '../../css/a/a_5gsrz8s.css';
import '../../css/i/ioebbhbja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkh622bdk"/><path class="dr_tp8gfx"/><path class="a_5gsrz8s"/><path class="ioebbhbja"/>`,
		"fallback": "fxemoji:anguish",
	});
}

export default Component;
