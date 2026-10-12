import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa6pz-bnf.css';
import '../../css/n/ns5oz0btl.css';
import '../../css/p/pc9u2x3ft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fa6pz-bnf"/><path class="ns5oz0btl"/><path class="pc9u2x3ft"/></g>`,
		"fallback": "lucide-extended:binoculars-duotone",
	});
}

export default Component;
