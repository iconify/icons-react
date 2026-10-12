import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gakixybhj.css';
import '../../css/p/pga7jebjx.css';
import '../../css/e/edda724cg.css';
import '../../css/w/w8fxfsb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gakixybhj"/><path class="pga7jebjx"/><path class="edda724cg"/><path class="w8fxfsb0c"/></g>`,
		"fallback": "lucide-extended:door-open-duotone",
	});
}

export default Component;
