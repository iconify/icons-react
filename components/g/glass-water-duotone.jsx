import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bbbewhblq.css';
import '../../css/n/n78umdbee.css';
import '../../css/d/dnc9b5rkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bbbewhblq"/><path class="n78umdbee"/><path class="dnc9b5rkc"/></g>`,
		"fallback": "lucide-extended:glass-water-duotone",
	});
}

export default Component;
