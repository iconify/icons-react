import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7gxrm85g.css';
import '../../css/u/uvwmqqfnf.css';
import '../../css/g/gcwzppgxn.css';
import '../../css/v/vym_iacup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7gxrm85g"/><path class="uvwmqqfnf"/><path class="gcwzppgxn"/><path class="vym_iacup"/></g>`,
		"fallback": "streamline-cyber-color:globe-2",
	});
}

export default Component;
