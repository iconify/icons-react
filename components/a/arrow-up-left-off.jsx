import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a8rhsbbes.css';
import '../../css/o/oaf9t3bzr.css';
import '../../css/s/ssnkahrib.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="a8rhsbbes"/><path class="oaf9t3bzr"/><path class="ssnkahrib"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:arrow-up-left-off",
	});
}

export default Component;
