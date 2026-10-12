import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtw_1ksjr.css';
import '../../css/k/kvr396g2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mtw_1ksjr"/><path class="kvr396g2q"/></g>`,
		"fallback": "lucide-extended:dock-duotone",
	});
}

export default Component;
