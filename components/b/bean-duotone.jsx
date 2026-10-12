import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psh_g_bzq.css';
import '../../css/g/g08jmodsg.css';
import '../../css/u/u7ubrjgxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="psh_g_bzq"/><path class="g08jmodsg"/><path class="u7ubrjgxw"/></g>`,
		"fallback": "lucide-extended:bean-duotone",
	});
}

export default Component;
