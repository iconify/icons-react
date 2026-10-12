import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/if5kfsb3m.css';
import '../../css/p/p1t855g6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="if5kfsb3m"/><path class="p1t855g6b"/></g>`,
		"fallback": "lucide-extended:align-horizontal-space-around-duotone",
	});
}

export default Component;
