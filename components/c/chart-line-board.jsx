import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwv72-otp.css';
import '../../css/x/xdlggfdrn.css';
import '../../css/b/bxmmgkbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwv72-otp"/><path class="xdlggfdrn"/><path class="bxmmgkbip"/></g>`,
		"fallback": "tdesign:chart-line-board",
	});
}

export default Component;
