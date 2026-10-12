import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ck4dwk4pi.css';
import '../../css/m/mm_bynxik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ck4dwk4pi"/><path class="mm_bynxik"/></g>`,
		"fallback": "lucide-extended:ellipse-duotone",
	});
}

export default Component;
