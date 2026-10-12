import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u352vjp6z.css';
import '../../css/p/p_e-hdc_r.css';
import '../../css/r/r099n9bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u352vjp6z"/><path class="p_e-hdc_r"/><path class="r099n9bbh"/></g>`,
		"fallback": "lucide-extended:bot-duotone",
	});
}

export default Component;
