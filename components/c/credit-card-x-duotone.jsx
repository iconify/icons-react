import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_e3spb3b.css';
import '../../css/j/joz_vvjya.css';
import '../../css/n/n55f-kb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r_e3spb3b"/><path class="joz_vvjya"/><path class="n55f-kb0p"/></g>`,
		"fallback": "lucide-extended:credit-card-x-duotone",
	});
}

export default Component;
