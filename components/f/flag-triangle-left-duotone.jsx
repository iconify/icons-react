import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4plucbtp.css';
import '../../css/l/lmof-ebwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l4plucbtp"/><path class="lmof-ebwd"/></g>`,
		"fallback": "lucide-extended:flag-triangle-left-duotone",
	});
}

export default Component;
