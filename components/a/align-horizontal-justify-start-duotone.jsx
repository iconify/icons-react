import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqh8jgb_h.css';
import '../../css/j/jr8_gf32b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fqh8jgb_h"/><path class="jr8_gf32b"/></g>`,
		"fallback": "lucide-extended:align-horizontal-justify-start-duotone",
	});
}

export default Component;
