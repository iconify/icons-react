import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w86xl1zzt.css';
import '../../css/s/st_h4wr9f.css';
import '../../css/x/xevbdpb8p.css';
import '../../css/r/r406_6bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.38 17.67)" class="w86xl1zzt"/><path class="st_h4wr9f"/><path class="xevbdpb8p"/><rect transform="matrix(0 -1 -1 0 22.38 17.67)" class="r406_6bde"/></g>`,
		"fallback": "andrsrxn:gamepad",
	});
}

export default Component;
