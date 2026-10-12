import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa17k1b2c.css';
import '../../css/u/u0z2embtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fa17k1b2c"/><path class="u0z2embtx"/></g>`,
		"fallback": "lucide-extended:battery-duotone",
	});
}

export default Component;
