import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gq3s25bqo.css';
import '../../css/k/keb4fmbmu.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gq3s25bqo"/><path clip-rule="evenodd" class="keb4fmbmu"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:fire-off",
	});
}

export default Component;
