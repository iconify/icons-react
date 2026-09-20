import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l52hl2bpy.css';
import '../../css/m/mya7lkbcq.css';
import '../../css/t/thsm46o_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l52hl2bpy"/><path class="mya7lkbcq"/><path class="thsm46o_z"/></g>`,
		"fallback": "streamline-cyber-color:business-pick-user",
	});
}

export default Component;
