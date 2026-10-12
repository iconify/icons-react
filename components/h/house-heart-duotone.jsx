import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-m9d6zav.css';
import '../../css/p/ppatxnbud.css';
import '../../css/u/u9wh36b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z-m9d6zav"/><path class="ppatxnbud"/><path class="u9wh36b8p"/></g>`,
		"fallback": "lucide-extended:house-heart-duotone",
	});
}

export default Component;
