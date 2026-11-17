import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0lx_bbbm.css';
import '../../css/b/b9ivx0bck.css';
import '../../css/f/flgkh2bzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m0lx_bbbm"/><path class="b9ivx0bck"/><path class="flgkh2bzg"/></g>`,
		"fallback": "lucide-extended:graph-ring-duotone",
	});
}

export default Component;
