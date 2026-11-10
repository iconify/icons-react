import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w9uu0tr5w.css';
import '../../css/q/qywrnvbas.css';
import '../../css/p/pudpoojvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w9uu0tr5w"/><path class="qywrnvbas"/><path clip-rule="evenodd" class="pudpoojvg"/></g>`,
		"fallback": "andrsrxn:agent-scan",
	});
}

export default Component;
