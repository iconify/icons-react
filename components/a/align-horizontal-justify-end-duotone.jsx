import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umk3cxbmk.css';
import '../../css/j/jwrlq1k6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="umk3cxbmk"/><path class="jwrlq1k6w"/></g>`,
		"fallback": "lucide-extended:align-horizontal-justify-end-duotone",
	});
}

export default Component;
