import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/g_8lrzb7q.css';
import '../../css/x/x-exdccqr.css';
import '../../css/s/so9dkqjrz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="g_8lrzb7q"/><path class="x-exdccqr"/><path class="so9dkqjrz"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:arrow-up-right-off",
	});
}

export default Component;
