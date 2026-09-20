import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/boht4iy8b.css';
import '../../css/w/wkdwilbgy.css';
import '../../css/w/wvnvuybcm.css';
import '../../css/e/ekrg9c_aa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="boht4iy8b"/><path clip-rule="evenodd" class="wkdwilbgy"/><path clip-rule="evenodd" class="wvnvuybcm"/><path class="ekrg9c_aa"/></g>`,
		"fallback": "pepicons-print:dress",
	});
}

export default Component;
