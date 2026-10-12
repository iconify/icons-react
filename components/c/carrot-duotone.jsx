import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvwq_m6gc.css';
import '../../css/k/ke864sb5l.css';
import '../../css/i/iloskbbyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvwq_m6gc"/><path class="ke864sb5l"/><path class="iloskbbyx"/></g>`,
		"fallback": "lucide-extended:carrot-duotone",
	});
}

export default Component;
