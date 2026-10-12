import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5ca21byh.css';
import '../../css/s/ssh18kvpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5ca21byh"/><path class="ssh18kvpm"/></g>`,
		"fallback": "lucide-extended:book-alert-duotone",
	});
}

export default Component;
