import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bdzoi2tmf.css';
import '../../css/m/m-i06kfpz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bdzoi2tmf"/><path clip-rule="evenodd" class="m-i06kfpz"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:equal-off",
	});
}

export default Component;
