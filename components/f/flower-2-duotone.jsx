import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s63451stl.css';
import '../../css/l/lq4gulsef.css';
import '../../css/c/ckjiqxg1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s63451stl"/><path class="lq4gulsef"/><path class="ckjiqxg1r"/></g>`,
		"fallback": "lucide-extended:flower-2-duotone",
	});
}

export default Component;
