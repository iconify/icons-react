import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrodqjb4o.css';
import '../../css/y/y_d3_dbln.css';
import '../../css/t/ttseslbft.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qrodqjb4o"/><path clip-rule="evenodd" class="y_d3_dbln"/><path clip-rule="evenodd" class="ttseslbft"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:arrow-up-off",
	});
}

export default Component;
