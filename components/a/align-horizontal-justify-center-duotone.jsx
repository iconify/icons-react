import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mhllb-_9i.css';
import '../../css/j/jr8_gf32b.css';
import '../../css/b/bm6qz-e6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mhllb-_9i"/><path class="jr8_gf32b"/><path class="bm6qz-e6h"/></g>`,
		"fallback": "lucide-extended:align-horizontal-justify-center-duotone",
	});
}

export default Component;
