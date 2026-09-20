import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cwxcpwbap.css';
import '../../css/p/pconk8xhp.css';
import '../../css/j/ji-rb-6hf.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="cwxcpwbap"/><path class="pconk8xhp"/><path class="ji-rb-6hf"/></g><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:earth-americas-off",
	});
}

export default Component;
