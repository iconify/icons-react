import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3_k57lwk.css';
import '../../css/e/e_9kbi40m.css';
import '../../css/k/k_my9vu2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3_k57lwk"/><path class="e_9kbi40m"/><path class="k_my9vu2a"/></g>`,
		"fallback": "lucide-extended:bike-duotone",
	});
}

export default Component;
