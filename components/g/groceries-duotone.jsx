import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/simuctb5x.css';
import '../../css/u/uklx4ab3h.css';
import '../../css/n/n171dubne.css';
import '../../css/q/q_hxl1s-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="simuctb5x"/><path class="uklx4ab3h"/><path class="n171dubne"/><path class="q_hxl1s-e"/></g>`,
		"fallback": "lucide-extended:groceries-duotone",
	});
}

export default Component;
