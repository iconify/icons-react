import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1h43q12n.css';
import '../../css/r/ruikhdc3c.css';
import '../../css/r/r_v4jxbyj.css';
import '../../css/s/sozdzabhh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r1h43q12n"/><path class="ruikhdc3c"/><path class="r_v4jxbyj"/><path class="sozdzabhh"/></g>`,
		"fallback": "streamline-flex-color:decent-work-and-economic-growth",
	});
}

export default Component;
