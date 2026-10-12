import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vx8odybtk.css';
import '../../css/j/joz_vvjya.css';
import '../../css/l/lbbplibvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vx8odybtk"/><path class="joz_vvjya"/><path class="lbbplibvi"/></g>`,
		"fallback": "lucide-extended:credit-card-minus-duotone",
	});
}

export default Component;
