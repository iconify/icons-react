import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c_id42c9d.css';
import '../../css/i/iqj065bgh.css';
import '../../css/b/b3lwj2bjo.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c_id42c9d"/><path class="iqj065bgh"/><path clip-rule="evenodd" class="b3lwj2bjo"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:flower-bud-off",
	});
}

export default Component;
