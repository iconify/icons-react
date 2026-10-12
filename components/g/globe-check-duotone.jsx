import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/its8f7byw.css';
import '../../css/j/j4t0g_avv.css';
import '../../css/i/im-u2lvxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="its8f7byw"/><path class="j4t0g_avv"/><path class="im-u2lvxf"/></g>`,
		"fallback": "lucide-extended:globe-check-duotone",
	});
}

export default Component;
