import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e10gahfxu.css';
import '../../css/d/dew929b_o.css';
import '../../css/b/bkkq4q6iu.css';
import '../../css/t/trgcwf45b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e10gahfxu"/><path class="dew929b_o"/><path class="bkkq4q6iu"/><path class="trgcwf45b"/></g>`,
		"fallback": "lucide-extended:ice-cream-bowl-duotone",
	});
}

export default Component;
