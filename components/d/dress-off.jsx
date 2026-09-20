import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkdwilbgy.css';
import '../../css/w/wvnvuybcm.css';
import '../../css/e/ekrg9c_aa.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wkdwilbgy"/><path clip-rule="evenodd" class="wvnvuybcm"/><path class="ekrg9c_aa"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:dress-off",
	});
}

export default Component;
