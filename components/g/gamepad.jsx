import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjvxzuhxb.css';
import '../../css/s/st_h4wr9f.css';
import '../../css/x/xevbdpb8p.css';
import '../../css/z/zdkw5sbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjvxzuhxb"/><path class="st_h4wr9f"/><path class="xevbdpb8p"/><path class="zdkw5sbus"/></g>`,
		"fallback": "andrsrxn:gamepad",
	});
}

export default Component;
