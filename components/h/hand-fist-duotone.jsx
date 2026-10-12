import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ur9kflbuq.css';
import '../../css/l/lbfwef4od.css';
import '../../css/j/jvmrv6zbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ur9kflbuq"/><path class="lbfwef4od"/><path class="jvmrv6zbn"/></g>`,
		"fallback": "lucide-extended:hand-fist-duotone",
	});
}

export default Component;
