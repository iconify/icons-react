import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ucogdbb3g.css';
import '../../css/e/es97pcacw.css';
import '../../css/j/jmpresk-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ucogdbb3g"/><path class="es97pcacw"/><path class="jmpresk-o"/></g>`,
		"fallback": "lucide-extended:cylinder-duotone",
	});
}

export default Component;
