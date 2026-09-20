import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7z1gubub.css';
import '../../css/p/p2vd3xbgk.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g7z1gubub"/><path clip-rule="evenodd" class="p2vd3xbgk"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-print:cloud-off",
	});
}

export default Component;
