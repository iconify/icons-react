import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es97pcacw.css';
import '../../css/k/ktfp9_bgq.css';
import '../../css/u/ucogdbb3g.css';
import '../../css/e/e9ntvbx0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="es97pcacw"/><path class="ktfp9_bgq"/><path class="ucogdbb3g"/><path class="e9ntvbx0s"/></g>`,
		"fallback": "lucide-extended:database-zap-duotone",
	});
}

export default Component;
