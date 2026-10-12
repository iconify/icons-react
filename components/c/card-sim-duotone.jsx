import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r6m16c0xn.css';
import '../../css/b/bsldfolwb.css';
import '../../css/x/xoty01rwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r6m16c0xn"/><path class="bsldfolwb"/><path class="xoty01rwd"/></g>`,
		"fallback": "lucide-extended:card-sim-duotone",
	});
}

export default Component;
