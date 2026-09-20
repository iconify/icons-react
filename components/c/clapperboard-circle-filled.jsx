import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lt4_7tbfr.css';
import '../../css/f/fe-32tbfb.css';
import '../../css/k/kyt4j6b-c.css';
import '../../css/s/ssw-3aboo.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><g clip-rule="evenodd" class="d2kvgvbvc"><path class="lt4_7tbfr"/><path class="fe-32tbfb"/><path class="kyt4j6b-c"/><path class="ssw-3aboo"/></g><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:clapperboard-circle-filled",
	});
}

export default Component;
