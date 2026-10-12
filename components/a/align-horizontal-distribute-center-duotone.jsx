import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mu170kibx.css';
import '../../css/b/bussztgsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mu170kibx"/><path class="bussztgsc"/></g>`,
		"fallback": "lucide-extended:align-horizontal-distribute-center-duotone",
	});
}

export default Component;
